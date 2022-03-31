<script>
  export let BASE_URL = '';
  export let num = 1;
  export let text = '';
  export let id = '';
</script>

<a href="{BASE_URL}/{id}" class="rounded-lg bg-white shadow max-h-full" style="grid-area: card{num}">
  <div class="w-full text-center text-2xl text-gray-900 my-4">{text}</div>
  <img src="/guns-n-goose/static/{id}.png" alt={text}>
</a>