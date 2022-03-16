<script>
  import AddChat from "../../components/Add-Chat.svelte";
  import ChatWindow from "../../components/Chat-Window.svelte";
  import { nav } from "@/user.js";
</script>

<svelte:head>
  <title>Guns N' Goose - Chat</title>
</svelte:head>

<div class="w-10/12 place-self-center drop-shadow">
  <div class="w-full max-h-screen bg-white rounded-xl px-12 py-6">
      <div class="w-full overflow-y-auto bg-grey mx-3">
        {#if $nav === "messages"}
          <button
            on:click={() => {
              $nav = "add_chat";
            }}>New Chats</button
          >
          <ChatWindow />
        {:else if $nav === "add_chat"}
          <AddChat />
        {/if}
      </div>
    </div>
</div>
