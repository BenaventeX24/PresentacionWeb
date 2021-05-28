var menu = document.getElementById('contact');
var menu2 = document.getElementById('documentation');
var submenu = document.getElementsByClassName("submenu_contact");
var submenu_docu = document.getElementsByClassName("submenu_documentation");
var flechita1 = document.getElementById("flechita1");
var flechita2 = document.getElementById("flechita2");

/*Funcion aparentemente compleja pero muy simple,
Si se hace un click en el menú, desplegará el submenú y cambiará de dirección la flechita
*/
menu.addEventListener("click", function(){
    if(submenu[0].style.display=='none'){
        submenu[0].style.display = 'block';
        flechita1.style.transform = "rotate(180deg)";
    }else{
        submenu[0].style.display='none';
        flechita1.style.transform="rotate(360deg)";
    }
});

/*Lo mismo para el menú2*/
menu2.addEventListener("click", function(){
    if(submenu_docu[0].style.display=='none'){
        submenu_docu[0].style.display = 'block';
        flechita2.style.transform = "rotate(180deg)";
    }else{
        submenu_docu[0].style.display='none';
        flechita2.style.transform="rotate(360deg)";
    }
});

/*easter egg*/
const easterEgg = () => {
    window.navigator.vibrate([200,100,200]);
    alert("Creí que nadie me descubriría");
};
