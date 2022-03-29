import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

export const db = GUN();
export const db_user = db.user().recall({sessionStorage: true});
export const user = writable('');
export const leaderboard = writable({});

db.get('leaderboard').map().on(async (credits, user) => {
  leaderboard.update(v => {
    v[user] = credits
    return v;
  });
})
db_user.get('alias').on(v => user.set(v))

db.on('auth', async(event) => {
  const alias = await db_user.get('alias');
  user.set(alias);
});
