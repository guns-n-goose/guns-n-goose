<svelte:head>
    <title>Guns N' Goose - Home</title>
</svelte:head>

<script>
  import HomeLeaderboard from './HomeLeaderboard.svelte';
  import HomeCard from './HomeCard.svelte';

  export let BASE_URL;

  const cards = [
    { num: 1, text: 'Chat', id: 'chat' },
    { num: 2, text: 'Russian Roulette', id: 'russian-roulette' },
    { num: 3, text: 'Wheel of Fortune', id: 'wheel-of-fortune' },
    { num: 4, text: 'Color Clicker', id: 'color-clicker' },
  ]
</script>

<div id="grid" class="px-6 pb-6" style="height: calc(100vh - 8rem);">
  <div class="rounded-lg bg-white shadow max-h-full overflow-auto" style="grid-area: leaderboard">
    <HomeLeaderboard/>
  </div>
  {#each cards as card}
    <HomeCard BASE_URL={BASE_URL} {...card}/>
  {/each}
</div>

<style>
  #grid {
    display: grid;
    gap: 1rem;
		grid-template-columns: 1.3fr 1fr 1fr;
		grid-template-areas:  "leaderboard card1 card2"
							            "leaderboard card3 card4";
    }
</style>