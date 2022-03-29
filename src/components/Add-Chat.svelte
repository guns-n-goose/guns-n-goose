<script>
  import { createEventDispatcher } from "svelte";
  import { activeChat, activeKey, nav, user } from "@/user.js";
</script>

<div class="w-full h-auto bg-white rounded-xl px-12 py-6">
  <div class="w-full mb-4 text-center font-bold text-3xl">Add a Chat</div>
  <div class="w-full text-center text-2xl" />
  <form on:submit|preventDefault={e => {
    if (!$user) return;
    $nav = 'messages';}}>
    <input
      type="text"
      placeholder="ChatID"
      class="border-gray-300 w-full mb-4 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      bind:value={$activeChat}
    />
    <input
      type="password"
      placeholder="Your shared private key"
      class="border-gray-300 w-full mb-4 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      bind:value={$activeKey}
    />
    <button
      class="w-full mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >Open Chat</button
    >
    <div class="w-full text-center text-gray-400 text-thin text-sm">
      Make sure you got everything right!
    </div>
  </form>
</div>
