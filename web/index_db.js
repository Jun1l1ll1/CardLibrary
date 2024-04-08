import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
  projectId: 'qnxe78u8',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-04-01',
})

client
  .fetch(`*[_type=="game"]`)
  .then((data) => showGames(data))
  .catch(console.error)



function showGames(games) {
  let grid = document.getElementById("game_grid");
  grid.innerHTML = "";
  for (let game of games) {
    console.log(game);
    grid.innerHTML += `
      <div class="game_box">
        <label for="${game.slug.current}_toggle">
          <div>
            <span class="game_name">${game.title}</span>
            <button onclick="goToRules('${game.slug.current}')" class="game_btn">-&gt;</button>
            <div class="game_players"><span>2</span><span>+</span> spillere</div>
          </div>
        </label>
        <input type="checkbox" name="${game.slug.current}" id="${game.slug.current}_toggle">

        <p class="game_info">${game.summary}</p>
      </div>
    `;
  }
}

