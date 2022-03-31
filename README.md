# Guns N' Goose
Guns N' Goose is a decentralized online platform with games and gambling powered by Svelte, Deno, Snel and GUN.js. All you have to do is enter a username and assign a password. After that, the decentralized user account is created and is not located on a central server, but only in the distributed database. In addition, you will receive 1000 credits at the beginning. Through various games you can now try to increase your credits and thus climb up the leaderboard. Currently implemented games are: Russian Roulette, Wheel of Fortune and Sidescroller. In addition to the three available games, there is a chat functionality. For this, a common chat id and encryption key must be chosen. From then on, all participants can send end-to-end encrypted messages to this chat.

🔴 https://guns-n-goose.github.io/guns-n-goose/

## Deployment to GitHub Pages
The application is automatically deployed to Github Pages via a GitHub Actions workflow if a change is made to the `main` branch. Specifically, this means that the svelte files are built to `html`, `js` and `css` and these files are then copied over to the `gh-pages` branch. This principle of Svelte ensures that the app is blazingly fast and requires hardly any memory, since only native `html`, `js` and `css` files are provided.


## Modularity and Contributions:
The individual games are stored in separate repositories and are made available via deno.land/x. This way we enable other people to include the created games in their own Snel application as well. Support for the main repository, but also for the individual games or even completely new games is always welcome.

How to participate in the development of Guns N' Goose?
```
git clone https://github.com/guns-n-goose/guns-n-goose.git
```
```
cd guns-n-goose
```
```
trex run start
```
