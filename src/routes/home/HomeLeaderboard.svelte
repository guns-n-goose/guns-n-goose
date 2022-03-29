<script>
  import HomeLeaderboardRow from "./HomeLeaderboardRow.svelte";
  import { leaderboard } from '@/user.js';
</script>
<div class="relative shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Rank
        </th>
        <th scope="col" class="px-6 py-3">
          User
        </th>
        <th scope="col" class="px-6 py-3">
          Credits
        </th>
      </tr>
  </thead>
    <tbody>
      {#each Object.entries($leaderboard) as [user, credits], index}
        <HomeLeaderboardRow rank={index+1} username={user} credits={credits}/>
      {/each}
    </tbody>
  </table>
</div>