let system = {
    "Planètes":{
    "VENUS":{
        "nom":"VENUS",
        "description":"Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l'amour.",
        "couleur1":"#F6EDE7",
        "couleur2":"#E5C39A",
        "couleur3":"#9B876E",
        "couleur4":"#080312",
        "img":"venus.svg"},
    "GLIESE":{
        "nom":"GLIESE 667CC",
        "description":"Gliese 667 Cc3,1,4 (également connue sous la dénomination GJ 667Cc ou HR 6426Cc) est une planète extrasolaire (exoplanète) confirmée de type super-Terre, en orbite autour de l'étoile Gliese 667 C, une naine rouge qui est elle-même un membre du système de trois étoiles Gliese 667 situé à une distance d'environ 22,7 années-lumière, dans la constellation zodiacale du Scorpion.",
        "couleur1":"#FBB77A",
        "couleur2":"#755137",
        "couleur3":"#273436",
        "couleur4":"#080312",
        "img":"gliese.svg"},
    "LUNE":{
        "nom":"LUNE",
        "description":"La Lune est l'unique satellite naturel de la Terre. Elle fait partie des objets de l'Univers explorés par l'Homme. Elle est visible depuis la Terre, car elle est éclairée par le Soleil. La Lune a quatre phases : nouvelle lune (pas de lune visible), premier quartier, pleine lune et dernier quartier.",
        "couleur1":"#FBB77A",
        "couleur2":"#755137",
        "couleur3":"#273436",
        "couleur4":"#080312",
        "img":"lune.svg"},
    "MARS":{
        "nom":"MARS",
        "description":"Mars est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse. Son éloignement au Soleil est compris entre 1,381 et 1,666 UA, avec une période orbitale de 669,58 jours martiens.",
        "couleur1":"#FBB77A",
        "couleur2":"#755137",
        "couleur3":"#273436",
        "couleur4":"#080312",
        "img":"mars.svg"},
    "IO":{
        "nom":"IO",
        "description":"Io, ou Jupiter I, est un satellite naturel de Jupiter. Plus spécifiquement, il s'agit de la troisième plus grande lune galiléenne et celle ayant l'orbite la plus proche de la planète Jupiter, possédant un demi-grand axe de 421 800 kilomètres et une période de révolution d'environ 42 heures. Par ailleurs, elle est la quatrième plus grande lune du Système solaire, la plus dense d'entre elles et l'objet astronomique connu contenant la plus faible quantité d'eau.",
        "couleur1":"#FBB77A",
        "couleur2":"#755137",
        "couleur3":"#273436",
        "couleur4":"#080312",
        "img":"io.svg"},
    "TITAN":{
        "nom":"TITAN",
        "description":`Titan, aussi appelé Saturne VI,
            est le plus grand satellite naturel de Saturne. 
            D'un diamètre 6 % plus grand que celui de Mercure, 
            Titan est par la taille au deuxième rang des satellites du Système solaire, 
            après Ganymède, le plus gros satellite de Jupiter. 
            Il s’agit du seul satellite connu à posséder une atmosphère dense. 
            Découvert par l’astronome néerlandais Christian Huygens en 1655, 
            Titan est la première lune observée autour de Saturne.`,
        "couleur1":"#FBB77A",
        "couleur2":"#755137",
        "couleur3":"#273436",
        "couleur4":"#080312",
        "img":"titan.svg"},
    "CHARON":{
        "nom":"CHARON",
        "description":"Charon, officiellement (134340) Pluton I Charon (désignation internationale : (134340) Pluto I (Charon)5, prononcé : /ka.ʁɔ̃/) est le plus grand satellite naturel de Pluton et un objet massif de la ceinture de Kuiper.",
        "couleur1":"#FBB77A",
        "couleur2":"#755137",
        "couleur3":"#273436",
        "couleur4":"#080312",
        "img":"charon.svg"}
    }}
    
// console.log('en dehors du foreach :', system[2].data);

// console.log(system[2].data[0].nom);

// let oui = document.querySelectorAll('button');

// for (let i = 0; i < oui.length; i++) {
//     oui[i].addEventListener("click", testcool);
//     };



// document.querySelector('.Précedent').addEventListener('click', testcool);
document.querySelector('.Suivant').addEventListener('click', testcool);

function testcool(){
    var keys = Object.keys(system.Planètes);
    var index = keys.indexOf(this.id);
    var nextPlanetName = keys[index+1];
    var nextPlanet = system.Planètes[nextPlanetName];
    
    document.querySelector(".Import").innerHTML= `
    <h1>` +system["Planètes"][this.id].nom +`</h1>`;

    document.querySelector('.Suivant').id = nextPlanetName;
}

// console.log(system["VENUS"]);

// document.querySelector(".Import").innerHTML+= `
//     <h1>` +system["VENUS"].nom +`</h1>`;

// system["VENUS"].forEach( e=>{
//     console.log('dans le foreach : ',e);


    
//     // `<img src='../img/planetes/` + e.img + `' alt='` + e.nom + `'>`
// })
