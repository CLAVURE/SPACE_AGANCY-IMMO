document.querySelector('.ENVOYER').addEventListener('click', popUp);

function popUp(){
    document.querySelector('.confirmation').style.display = 'flex'
    document.querySelector('.confirmation').classList.add('displayBlock');
    setTimeout(suite, 550);
    function suite(){
        document.querySelector('.confirmation').style.opacity = '100%';
        document.querySelector('.confirmation').classList.remove('displayBlock');
        setTimeout(disparaitPopUp, 4000);
    }
}

function disparaitPopUp(){
    
    document.querySelector('.confirmation').classList.add('displayNone');
    setTimeout(suite2, 550);
    function suite2(){
        document.querySelector('.confirmation').classList.remove('displayNone');
        document.querySelector('.confirmation').style.opacity = '0';
        document.querySelector('.confirmation').style.display = 'none'
    }
}