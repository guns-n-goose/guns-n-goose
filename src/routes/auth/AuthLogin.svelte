<script>
  import { createEventDispatcher } from 'svelte';
  import UserImage from '@/components/UserImage.svelte';

  export let username;
  export let error;
  let password;

	const dispatch = createEventDispatcher();
  const loginEvent = () => { dispatch('login', { password }) };
  const resetEvent = () => { dispatch('reset') };
  const errorEvent = (e) => { dispatch('error', { error: e }) };
</script>

<div class="w-full h-auto bg-white rounded-xl px-12 py-6">
  <UserImage username={username}/>
  <div class="w-full text-center text-2xl">{username}</div>
  <div class="w-full mb-4 text-center font-light text-blue-700"><span on:click={resetEvent} class="cursor-pointer hover:underline">Use different account</span></div>
  <input on:change={() => errorEvent('')} bind:value={password} type="password" placeholder="Password" class="{error ? 'border-rose-600' : 'border-gray-300'} w-full mb-4 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
  <button on:click={loginEvent} class="w-full mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
  <div class="w-full text-center text-gray-400 text-thin text-sm">By proceeding, you agree to the <a class="underline" href="/terms-of-service">Terms of Service</a> and <a class="underline" href="/privacy-notice">Privacy Notice</a></div>
</div>