import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

function localStorageStore({ storageKey, initialValue = "" }) {
    const init = localStorage.getItem(storageKey) || initialValue;
  
    const { subscribe, update, set } = writable(init);
  
    subscribe((state) => {
      if (state) localStorage.setItem(storageKey, state);
    });
  
    return {
      subscribe,
      update,
      set,
    };
  }

export const db = GUN();
export const db_user = db.user().recall({sessionStorage: true});
export const user = writable('');
export const chats = writable([])
export const activeChat = localStorageStore({storageKey:'active_chat'})
export const activeKey = localStorageStore({storageKey:'active_key'})
export const nav = localStorageStore({storageKey: "chat_nav", initialValue: "add_chat",});

db_user.get('alias').on(v => user.set(v))

db.on('auth', async(event) => {
    const alias = await db_user.get('alias');
    user.set(alias);
});
