<script>
  import { user } from "@/user.js";
  export let message;
</script>

<!--

<div
  class="mb-4 flex-1  {`${$user}` === message.who ? 'text-right' : 'text.left'}"
>
  <div
    class="inline-block {`${$user}` === message.who
      ? 'bg-blue-300'
      : 'bg-gray-300'} rounded-full p-2 px-6 text-gray-700"
  >
    <span>{message.what}</span>
  </div>
  <div class="pl-4"><small class="text-gray-500">{message.who}</small></div>
</div>
-->

<li class="mb-10 ml-6">
    <span
      class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
    >
      <img
        class="rounded-full shadow-lg"
        src="https://avatars.dicebear.com/api/adventurer-neutral/gg.svg"
        alt="user icon"
      />
    </span>
    <div
      class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600"
    >
      <time
        class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
        >1 day ago</time
      >
      <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
          {message.what}
      </div>
    </div>
  </li>