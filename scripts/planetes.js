// liste des planètes, leurs noms, couleurs etc
let system = {
    "Planètes":{
    "VENUS":{
        "nom":"VENUS",
        "description":"Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l'amour.",
        "couleur1":"#05081f",
        "couleur2":"#9B876E",
        "couleur3":"#E5C39A",
        "couleur4":"#F6EDE7",
        "img":"venus.png"},
    "GLIESE":{
        "nom":"GLIESE 667CC",
        "description":"Gliese 667 Cc3,1,4 (également connue sous la dénomination GJ 667Cc ou HR 6426Cc) est une planète extrasolaire (exoplanète) confirmée de type super-Terre, en orbite autour de l'étoile Gliese 667 C.",
        "couleur1":"#05081f",
        "couleur2":"#273436",
        "couleur3":"#755137",
        "couleur4":"#FBB77A",
        "img":"gliese.svg"},
    "LUNE":{
        "nom":"LUNE",
        "description":"La Lune est l'unique satellite naturel de la Terre. Elle fait partie des objets de l'Univers explorés par l'Homme. Elle est visible depuis la Terre, car elle est éclairée par le Soleil. La Lune a quatre phases : nouvelle lune (pas de lune visible), premier quartier, pleine lune et dernier quartier.",
        "couleur1":"#05081f",
        "couleur2":"#121113",
        "couleur3":"#737076",
        "couleur4":"#BAAFBD",
        "img":"lune.svg"},
    "MARS":{
        "nom":"MARS",
        "description":"Mars est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse. Son éloignement au Soleil est compris entre 1,381 et 1,666 UA, avec une période orbitale de 669,58 jours martiens.",
        "couleur1":"#05081f",
        "couleur2":"#1C0203",
        "couleur3":"#480C08",
        "couleur4":"#DC6835",
        "img":"mars.png"},
    "IO":{
        "nom":"IO",
        "description":"Io, ou Jupiter I, est un satellite naturel de Jupiter. Plus spécifiquement, il s'agit de la troisième plus grande lune galiléenne et celle ayant l'orbite la plus proche de la planète Jupiter, possédant un demi-grand axe de 421 800 kilomètres et une période de révolution d'environ 42 heures.",
        "couleur1":"#05081f",
        "couleur2":"#9B8B50",
        "couleur3":"#9B8B50",
        "couleur4":"#9B8B50",
        "img":"io.svg"},
    "TITAN":{
        "nom":"TITAN",
        "description":`Titan, aussi appelé Saturne VI,
            est le plus grand satellite naturel de Saturne. 
            D'un diamètre 6 % plus grand que celui de Mercure, 
            Titan est par la taille au deuxième rang des satellites du Système solaire, 
            après Ganymède, le plus gros satellite de Jupiter.`,
        "couleur1":"#05081f",
        "couleur2":"#374C45", 
        "couleur3":"#547469",
        "couleur4":"#99D2A1",
        "img":"titan.svg"}, 
    "CHARON":{
        "nom":"CHARON",
        "description":"Charon, officiellement (134340) Pluton I Charon (désignation internationale : (134340) Pluto I (Charon)5, prononcé : /ka.ʁɔ̃/) est le plus grand satellite naturel de Pluton et un objet massif de la ceinture de Kuiper.",
        "couleur1":"#05081f",
        "couleur2":"#494848",
        "couleur3":"#7E6351",
        "couleur4":"#855137",
        "img":"charon.svg"}
    }}
    
document.querySelector('.Suivant').addEventListener('click', slider);
document.querySelector('.Précedent').addEventListener('click', slider);

//Fonction permettant de changer de planète dans la liste
function slider(){
    //Pour pouvoir obtenir le nom de la planète suivante et précédente
    var keys = Object.keys(system.Planètes);
    var index = keys.indexOf(this.id); //this.id récupère le nom de la planète voulue
    var nextPlanetName = keys[index+1];
    var previousPlanetName = keys[index-1];
    
    //J'insère le nom de la planète voulue dans le h1
    document.querySelector(".Import").innerHTML= `
        <div>
           <div>` +system["Planètes"][this.id].nom +`</div> 
        </div>`;

    //Je change l'affichage de la planète (href du a, image, attribut alt de l'image, description, degradé)
    document.querySelector('.DécouvrirPlans>div>a').href = "plans.html?planete=" + system["Planètes"][this.id].nom;
    document.querySelector('.imagePlanete').src = `../img/planetes/` + system["Planètes"][this.id].img + ``;
    document.querySelector('.imagePlanete').alt = system["Planètes"][this.id].nom;
    document.querySelector('.Description').innerHTML = system["Planètes"][this.id].description;
    document.querySelector('.Dégradé').style = "background-image:linear-gradient(" + system["Planètes"][this.id].couleur1 + ", "+ system["Planètes"][this.id].couleur2 +", "+ system["Planètes"][this.id].couleur3 +", "+ system["Planètes"][this.id].couleur4 +");";

    //if else permettant de revenir au début de la liste une fois arrivé à la fin (pour que ce soit une boucle)
    if(this.id=='CHARON'){
        nextPlanetName='VENUS';
    } else if(this.id=='VENUS'){
        previousPlanetName='CHARON';
    }

    //Je change les id des flèches pour qu'elles correspondent au nom de la planète suivante et précédente
    document.querySelector('.Suivant').id = nextPlanetName;
    document.querySelector('.Précedent').id = previousPlanetName;
}

