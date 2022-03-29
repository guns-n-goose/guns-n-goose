<svelte:head>
    <title>Guns N' Goose - Authentication</title>
</svelte:head>

<script>
  import { db, db_user } from '@/user.js';
  import AuthUsername from './AuthUsername.svelte';
  import AuthRegister from './AuthRegister.svelte';
  import AuthLogin from './AuthLogin.svelte';
  import AuthError from './AuthError.svelte';

  let username = '';
  let nameSubmitted = 0;
  let error = '';

  const handleReset = () => {
    username = ''; 
    nameSubmitted = 0; 
    error = '';
  }
  const handleError = (event) => {
    error = event.detail.error;
  }
  const handleContinue = (event) => {
    username = event.detail.username;
    db.get(`~@${username}`).once((data) => {
      nameSubmitted = !data ? 1 : 2;
    })
  }
  const handleRegister = (event) => {
    db_user.create(username, event.detail.password, ({ err }) => {
      if (err) error = err;
      else {
        db.get('leaderboard').get(username).put(1000)
        handleLogin(event)
      };
    })
  }
  const handleLogin = (event) => {
    db_user.auth(username, event.detail.password, ({ err }) => {
      if (err) error = err;
      else {
        window.location.reload();
      }
    })
  }
</script>

<div class="w-screen h-screen grid">
  <div class="w-2/6 place-self-center drop-shadow">
    {#if nameSubmitted == 0}
      <AuthUsername error={error} on:continue={handleContinue} on:error={handleError}/>
    {:else if nameSubmitted == 1}
      <AuthRegister username={username} error={error} on:register={handleRegister} on:reset={handleReset} on:error={handleError}/>
    {:else}
      <AuthLogin username={username} error={error} on:login={handleLogin} on:reset={handleReset} on:error={handleError}/>
    {/if}
  </div>

  {#if error}
    <AuthError error={error}/>
  {/if}
</div>