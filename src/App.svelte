<script>
  import Loader from '@/components/Loader.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Auth from '@/routes/auth/Auth.svelte';
  import About from '@/routes/about/About.svelte';
  import TermsOfService from '@/routes/terms-of-service/TermsOfService.svelte';
  import PrivacyNotice from '@/routes/privacy-notice/PrivacyNotice.svelte';
  import Navbar from '@/components/Navbar.svelte';
  import { user, db_user } from '@/user.js';

  const BASE_URL = window.location.host === 'guns-n-goose.github.io' ? window.location.origin + '/guns-n-goose': window.location.origin;
  const PATH = window.location.href.replace(BASE_URL, '')

  const routes = {
    '/': {component: Home, access: 'loggedIn'},
    '/auth': {component: Auth, access: 'loggedOut'},
    '/about': {component: About, access: ''},
    '/terms-of-service': {component: TermsOfService, access: ''},
    '/privacy-notice':  {component: PrivacyNotice, access: ''},
  }

  const loadApp = new Promise((resolve) => {
    if (!routes[PATH])
      window.location.href = BASE_URL;
    setTimeout(() => {
      if (routes[PATH].access === 'loggedIn' && !$user)
        window.location.href = BASE_URL + '/auth';
      else if (routes[PATH].access === 'loggedOut' && $user)
        window.location.href = BASE_URL;
      else 
        resolve();
    }, 300);
  })

  const logout = () => {
    db_user.leave();
    user.set('');
    window.location.reload();
  }
</script>


<main class="w-full h-full bg-gray-100">
  {#await loadApp}
    <Loader/>
  {:then}
    {#if PATH !== '/auth'}
      <Navbar/>
      <div class="w-screen h-32"/>
    {/if}
    <svelte:component this={routes[PATH].component}/>
    <button on:click={logout} class="absolute bottom-0">Logout</button>
  {/await}
</main>