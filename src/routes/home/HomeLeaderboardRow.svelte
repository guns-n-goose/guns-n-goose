<script>
  import { user } from '@/user.js';
  export let rank = 1;
  export let username = '';
  export let credits = 0;

  const me = (username == $user)
</script>

<tr class="{me ? 'bg-gray-100' : 'bg-white'} border-b">
  <th scope="row" class="pl-4 text-2xl text-gray-900 w-1">
    {rank}.
  </th>
  <th scope="row h-full flex items-center justify-center" class="py-4 text-xl font-light text-gray-900 whitespace-nowrap">
    <div class="h-full flex items-center">
      <img class="mr-4 h-16 rounded-xl" src="https://avatars.dicebear.com/api/adventurer-neutral/{username}.svg" alt="user">
      <div class="mr-4">
        {username}
      </div>
    </div>
  </th>
  <td class="px-6 py-4 text-2xl text-gray-900">
    {credits}
  </td>
</tr>