<script>
  import { user, db_user, leaderboard } from '@/user.js';

  export let BASE_URL;

  const logout = () => {
    db_user.leave();
    user.set('');
    window.location.reload();
  }
</script>

<nav class="w-auto h-20 inset-x-6 top-6 px-4 fixed bg-white rounded-lg shadow z-50">
    <div class="h-full float-left">
      <a href="{BASE_URL}" class="h-full">
        <img class="h-full" src="/guns-n-goose/static/logo-text.svg" alt="logo">
      </a>
    </div>
    <div class="h-full float-right flex items-center justify-center py-4">
      <div class="h-full flex items-center justify-center">
        <div class="mr-4 text-right">
          {$user}<br>
          {$leaderboard[$user]}
        </div>
        <img class="mr-4 h-full rounded-xl" src="https://avatars.dicebear.com/api/adventurer-neutral/{$user}.svg" alt="user">
        <button on:click={logout} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">Logout</button>
      </div>
    </div>
    
</nav>