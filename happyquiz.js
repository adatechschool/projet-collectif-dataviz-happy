let question = document.getElementById('question')
let reponse = document.getElementById('reponse')
let conteneur = document.getElementById('conteneur')

let tabq = ["Which of these movies was your favorite?",
    "What genre is typically your favorite?",
    "What's for dinner?",
    "What character trait is your favorite?",
    "Pick a female series character.",
    "Which of these do you value most ?",
    "Pick a music artist.",
    "Pick a thinking spot"]

let tabr = [{ a: "Harry Potter and the Philosopher's Stone (2001)", b: "Fight Club (1999)", c: "Interstellar (2014)", d: "Titanic (1997)", e: "Spider-Man: Into the Spider-Verse (2018)" },
{ a: "Action", b: "Romance", c: "Comedy", d: "Science-fiction", e: "Horror" },
{ a: "Pasta" },
{ a: "Intelligent", b: "Mysterious", c: "Passionate", d: "Strong", e: "Adventurous" },
{ a: "Cersei Lannister - Game of Thrones", b: "Eve Polastri - Killing Eve", c: "Annalise Keating - How to Get Away with Murder", d: "Eleven - Stranger Things", e: "Rue Bennett - Euphoria" },
{ a: "Integrity", b: "Wisdom", c: "Freedom", d: "Community", e: "Money" },
{ a: "Damso", b: "Beyoncé", c: "The Weeknd", d: "Drake", e: "Aya Nakamura" },
{ a: "img", b: "img", c: "img", d: "img", e: "img" }]

function posequestion1() {
    question.innerHTML = `<h1>${tabq[0]}</h1>`
    reponse.innerHTML =
        `<button onclick="posequestion2(); addScienceFiction()"><img height=100 src="image/harryPotter.gif">${tabr[0].a}</button>
<button onclick="posequestion2(); addComedy()" ><img height=100 src="image/fightClub.gif">${tabr[0].b}</button>
<button onclick="posequestion2(); addHorror()"><img height=100 src="image/interstellar.gif">${tabr[0].c}</button>
<button onclick="posequestion2(); addRomance()"><img height=100 src="image/titanic.gif">${tabr[0].d}</button>
<button onclick="posequestion2(); addAction()"><img height=100 src="image/spiderman.gif">${tabr[0].e}</button>`

    /*button.addEventListener('onclick', function () {
        console.log('cliqué')
    })*/

}
function posequestion2() {
    question.innerHTML = `<h1>${tabq[1]}</h1>`
    reponse.innerHTML =
        `<button onclick="posequestion4(); addAction()"><img height=100 src="image/action.gif">${tabr[1].a}</button>
<button onclick="posequestion4(); addRomance()"><img height=100 src="image/loveStory.gif">${tabr[1].b}</button>
<button onclick="posequestion4(); addComedy()"><img height=100 src="image/comedy.gif">${tabr[1].c}</button>
<button onclick="posequestion4(); addSF()"><img height=100 src="image/sciFi.gif">${tabr[1].d}</button>
<button onclick="posequestion4(); addHorror()"><img height=100 src="image/horror.gif">${tabr[1].e}</button>`
}

function posequestion4() {
    question.innerHTML = `<h1>${tabq[3]}</h1>`
    reponse.innerHTML =
        `<button onclick="posequestion5(); addHorror()"><img height=100 src="image/.gif">${tabr[3].a}</button>
<button onclick="posequestion5(); addRomance()"><img height=100 src="image/.gif">${tabr[3].b}</button>
<button onclick="posequestion5(); addComedy()"><img height=100 src="image/.gif">${tabr[3].c}</button>
<button onclick="posequestion5(); addAction()"><img height=100 src="image/.gif">${tabr[3].d}</button>
<button onclick="posequestion5(); addSF()"><img height=100 src="image/.gif">${tabr[3].e}</button>`
}

function posequestion5() {
    question.innerHTML = `<h1>${tabq[4]}</h1>`
    reponse.innerHTML =
        `<button onclick="posequestion6(); addHorror()"><img height=100 src="image/cersei-lannister-game-of-thrones.gif">${tabr[4].a}</button>
<button onclick="posequestion6(); addAction()"><img height=100 src="image/eve polastri.gif">${tabr[4].b}</button>
<button onclick="posequestion6(); addComedy()"><img height=100 src="image/annalise keating.gif">${tabr[4].c}</button>
<button onclick="posequestion6(); addSF"><img height=100 src="image/eleven.gif">${tabr[4].d}</button>
<button onclick="posequestion6(); addRomance()"><img height=100 src="image/rue.gif">${tabr[4].e}</button>`
}

function posequestion6() {
    question.innerHTML = `<h1>${tabq[5]}</h1>`
    reponse.innerHTML =
        `<button onclick="posequestion7(); addAction()"><img height=100 src="image/.gif">${tabr[5].a}</button>
<button onclick="posequestion7(); addComedy()"><img height=100 src="image/.gif">${tabr[5].b}</button>
<button onclick="posequestion7(); addSF()"><img height=100 src="image/.gif">${tabr[5].c}</button>
<button onclick="posequestion7(); addRomance()"><img height=100 src="image/.gif">${tabr[5].d}</button>
<button onclick="posequestion7(); addHorror()"><img height=100 src="image/.gif">${tabr[5].e}</button>`
}

function posequestion7() {
    question.innerHTML = `<h1>${tabq[6]}</h1>`
    reponse.innerHTML =
        `<button onclick="posequestion8(); addSF()"><img height=100 src="image/damso.gif">${tabr[6].a}</button>
<button onclick="posequestion8(); addAction()"><img height=100 src="image/beyoncé.webp">${tabr[6].b}</button>
<button onclick="posequestion8(); addHorror()"><img height=100 src="image/the weeknd.webp">${tabr[6].c}</button>
<button onclick="posequestion8(); addComedy()"><img height=100 src="image/drake.gif">${tabr[6].d}</button>
<button onclick="posequestion8(); addRomance()"><img height=100 src="image/aya.gif">${tabr[6].e}</button>`
}

function posequestion8() {
    question.innerHTML = `<h1>${tabq[7]}</h1>`
    reponse.innerHTML =
        `<button onclick="resultat(); addHorror()"><img height=100 src="image/.gif">${tabr[7].a}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].b}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].c}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].d}</button>
<button onclick="resultat()"><img height=100 src="image/.gif">${tabr[7].e}</button>`
}


let compteurAction = [];
let compteurRomance = [];
let compteurComedie = [];
let compteurSF = [];
let compteurHorror = [];

const addAction = () => {
    compteurAction += 5
}

const addRomance = () => {
    compteurRomance += 5
}

const addComedy = () = {
    compteurComedie += 5
}

const addSF = () = {
    compteurSF += 5
}

const addHorror = () = {
    compteurHorror += 5
}

console.log(compteurAction)

// const result = await fetch(`https://myanimelist.net/anime/genre/1/Action?filter=airing&order_by=popularity`);





// variable qui liste les réponses
/** for each [1], ajouter au tableau [action] et calculer length
 * englober chaque fonction calcul dans une fonction globale
 * ressortir le résultat
 */

/** getAnswers 
 * action = 1 // romance = 2 // comédie = 3 // science-fiction : 4 // horreur = 5
 * harry potter = 4
 * fight club = 3
 * interstellar = 5
 * titanic = 2
 * spider-man = 1
 * 
 * strong = 1
 * passionate = 2
 * intelligent = 3
 * adventurous = 4
 * mysterious = 5
 * 
 * cersei = 5
 * eve = 1
 * annalise = 3
 * eleven = 4
 * rue = 2
 * 
 * integrity = 1
 * wisdom = 3
 * freedom = 4
 * community = 2
 * money = 5
 * 
 * space = 4
 * post = 5
 * flowers = 2
 * city = 3
 * village = 1
 * 
 * damso = 5
 * beyoncé = 1
 * drake = 3
 * aya = 2
 * the weeknd = 4
 * 
*/