import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
    projectId: 'qnxe78u8',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-04-01',
})

const url_params = new URLSearchParams(window.location.search);
const game_id = url_params.get('id');

client
    .fetch(`*[slug.current=="${game_id}"]`)
    .then((data) => displayGame(data[0]))
    .catch(console.error)



function displayGame(game) {
    let name = document.getElementById("name_txt");
    let from_nr = document.getElementById("from_txt");
    let to_nr = document.getElementById("to_txt");
    let summary = document.getElementById("summary_txt");
    let rules = document.getElementById("rule_txt");

    let faq_grid = document.getElementById("faq_grid");

    console.log(game);

    name.innerText = game.title;
    from_nr.innerText = game.players.from;
    to_nr.innerText = game.players.to ? '-'+game.players.to : '+';
    
    summary.innerText = game.summary;
    rules.innerText = game.rules;


}
