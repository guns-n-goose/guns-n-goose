<script>
  import Loader from '@/components/Loader.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Auth from '@/routes/auth/Auth.svelte';
  import About from '@/routes/about/About.svelte';
  import TermsOfService from '@/routes/terms-of-service/TermsOfService.svelte';
  import PrivacyNotice from '@/routes/privacy-notice/PrivacyNotice.svelte';
  import Chat from '@/routes/chat/Chat.svelte';
  import Navbar from '@/components/Navbar.svelte';
  import { user, db } from '@/user.js';

  import RussianRoulette from 'https://deno.land/x/svelte_russian_roulette@v.1.2/RussianRoulette.svelte';
  import WheelOfFortune from 'https://deno.land/x/svelte_wheel_of_fortune@gamma/Wheel-of-Fortune.svelte';
  import ColorClicker from 'https://deno.land/x/colorclicker@Release-2/Colorclicker.svelte';
  
  const BASE_URL = window.location.host === 'guns-n-goose.github.io' ? window.location.origin + '/guns-n-goose': window.location.origin;
  const PATH = window.location.href.replace(BASE_URL, '')

  const routes = {
    '/': {component: Home, access: 'loggedIn'},
    '/auth': {component: Auth, access: 'loggedOut'},
    '/about': {component: About, access: ''},
    '/terms-of-service': {component: TermsOfService, access: ''},
    '/privacy-notice':  {component: PrivacyNotice, access: ''},
    '/chat': {component: Chat, access: 'loggedIn'},
    '/russian-roulette':  {component: RussianRoulette, access: 'loggedIn'},
    '/wheel-of-fortune':  {component: WheelOfFortune, access: 'loggedIn'},
    '/color-clicker':  {component: ColorClicker, access: 'loggedIn'},
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

  const handleWin = (event) => {
    db.get('leaderboard').get($user).once((credits) => {
      db.get('leaderboard').get($user).put(credits + event.detail.amount)
    })
  }

  const handleLose = (event) => {
    db.get('leaderboard').get($user).once((credits) => {
      if (event.detail.amount === 'all') {
        db.get('leaderboard').get($user).put(0)
      }
      else {
        db.get('leaderboard').get($user).put(credits - event.detail.amount)
      }
    })
  }
</script>


<main class="h-screen bg-gray-200 grid w-screen max-w-screen overflow-hidden">
  {#await loadApp}
    <Loader/>
  {:then}
    {#if PATH !== '/auth'}
      <Navbar class="z-50" BASE_URL={BASE_URL}/>
      <div class="w-screen h-32"/>
    {/if}
    <div>
      <svelte:component this={routes[PATH].component} BASE_URL={BASE_URL} on:win={handleWin} on:lose={handleLose}/>
    </div>
  {/await}
</main>