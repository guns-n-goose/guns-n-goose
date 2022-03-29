<script>
  import { createEventDispatcher } from 'svelte';

  export let error;
  let username = '';
  /*const infos = [
    {'name': 'broadcast', 'text': 'Broadcast your toughts and information to the world and get incoming ones.'},
    {'name': 'fingerprint', 'text': 'No email address is required. Just choose a pseudonym and be part of the social network.'},
    {'name': 'decentralization', 'text': 'All data is only stored on a decentralized database ecosystem named GUN.'},
    {'name': 'encryption', 'text': 'All messaged are encrypted by default and no one except the authorized user can read them.'},
  ]*/

	const dispatch = createEventDispatcher();
  const continueEvent = () => { dispatch('continue', { username }) };
  const errorEvent = (e) => { dispatch('error', { error: e }) };

  const checkUsername = () => {
    if (!username) 
      errorEvent('Please enter a username.');
    else 
      return true;
    return false
  }
</script>

<div class="w-full h-auto bg-white rounded-xl px-12">
  <img src="/guns-n-goose/static/logo-text.svg" alt="logo" class="m-auto w-8/12">
  <input on:change={() => errorEvent('')} bind:value={username} placeholder="Enter your username" class="{error ? 'border-rose-600' : 'border-gray-300'} w-full mb-4 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
  <button on:click={() => { if (checkUsername()) continueEvent()}} class="w-full mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Continue</button>
</div>

<!--
<div class="w-full h-auto bg-gray-100 rounded-b-xl px-12 pb-6">
  {#each [0,2] as n}
    <div class="flex flex-row">
      {#each infos.slice(n,n+2) as info}
        <div class="basis-1/2 pt-10 pr-4">
          <img class="h-12 mb-1" src="/static/{info.name}.png" alt={info.name}>
          <span class="text-sm font-thin">{info.text}</span>
        </div>
      {/each}
    </div>
  {/each}
  <a href="https://github.com/guns-n-goose">
    <img class="mt-6 w-8 m-auto mb-1" src="/static/github.png" alt="github" href="https://github.com/guns-n-goose"/>
    <div class="text-center text-sm font-thin">Guns N' Goose is open-source</div>
  </a>
</div>
-->