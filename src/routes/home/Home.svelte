<svelte:head>
    <title>Guns N' Goose</title>
</svelte:head>

<script>
  import { user } from '@/user.js';
  import HomeLeaderboard from './HomeLeaderboard.svelte';
  import HomeCard from './HomeCard.svelte';
</script>

<div id="grid" class="px-6 pb-6">
    <div class="rounded-lg bg-white shadow" style="grid-area: leaderboard">
        Leaderboard
    </div>
    <div class="rounded-lg bg-white shadow" style="grid-area: card1">
        Chat
    </div>
    <div class="rounded-lg bg-white shadow" style="grid-area: card2">
        Russian Roulette
    </div>
    <div class="rounded-lg bg-white shadow" style="grid-area: card3">
        Wheel of Fortune
    </div>
    <div class="rounded-lg bg-white shadow" style="grid-area: card4">
        Sidescroller
    </div>
</div>

<style>
  #grid {
    height: calc(100% - 8rem);
    display: grid;
    gap: 1rem;
		grid-template-columns: 1.3fr 1fr 1fr;
		grid-template-areas:  "leaderboard card1 card2"
							            "leaderboard card3 card4";
    }
</style>