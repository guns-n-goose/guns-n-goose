<script>
  export let myself = false;
  export let img = "";
  export let displayname = "";
  export let username = "";
  export let time = "";
  export let content = "";
</script>

<li class="mb-7 ml-7">            
  <span class="flex absolute -left-5 w-10 h-10 mt-1.5 bg-blue-200 rounded-full">
    <img class="rounded-full shadow-lg" src={img} alt="profile"/>
  </span>
  <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
    <div class="justify-between items-center sm:flex">
      {#if myself}
        <div class="w-full place-self-center float-left relative z-0 group">
          <input name="text" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
          <label for="text" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            What's happening?
          </label>
        </div>
      {:else}
        <div class="font-normal dark:text-gray-300">{displayname} <span class="text-gray-500">{username}</span></div>
        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{time}</time>
      {/if}
    </div>
    {#if content}
      <div class="mt-3 text-sm font-normal dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{content}</div>
    {/if}
  </div>
</li>