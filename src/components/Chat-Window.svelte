<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { activeChat, activeKey, db_user } from "@/user.js";
  import ChatBubble from "./Chat-Bubble.svelte";

  const db = GUN({
    peers: [
      "http://localhost:8765/gun",
      "https://gun-manhattan.herokuapp.com/gun",
    ],
  });
  let newMessage;
  let messages = [];

  onMount(() => {
    // Get Messages
    db.get($activeChat)
      .map()
      .once(async (data, id) => {
        if (data) {
          // Key for end-to-end encryption
          var message = {
            // transform the data
            who: await db.user(data).get("alias"), // a user might lie who they are! So let the user system detect whose data it is.
            what: (await SEA.decrypt(data.what, $activeKey)) + "", // force decrypt as text.
            when: GUN.state.is(data, "what"), // get the internal timestamp for the what property.
          };
          if (message.what) {
            messages = [...messages.slice(-100), message].sort(
              (a, b) => a.when - b.when
            );
          }
        }
      });
  });
  async function sendMessage() {
    const secret = await SEA.encrypt(newMessage, $activeKey);
    const message = db_user.get("all").set({ what: secret });
    const index = new Date().toISOString();
    db.get($activeChat).get(index).put(message);
    newMessage = "";
  }
</script>

<div class="grid-rows-2 rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
    <ol class="relative border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
      {#each messages as message (message.when)}
        <ChatBubble {message} />
      {/each}
    </ol>
  <div class="w-full ">
    <form on:submit|preventDefault={sendMessage}>
      <input
        type="text"
        placeholder="Type a message..."
        class="border-gray-300 w-full mb-4 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        bind:value={newMessage}
        maxlength="100"
      />
    </form>
  </div>
</div>
