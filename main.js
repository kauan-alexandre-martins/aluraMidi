alert("para continuar forneça seus dados bancarios!!!")

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();}
    document.querySelector('.tecla_pom').onclick = tocaSomPom;

    function tocaSomclap() {
        document.querySelector('#som_tecla_clap').play();}
        document.querySelector('.tecla_clap').onclick = tocaSomclap;

        function tocaSomtim() {
            document.querySelector('#som_tecla_tim').play();}
            document.querySelector('.tecla_tim').onclick = tocaSomtim;


        function tocaSompuff() {
            document.querySelector('#som_tecla_puff').play();}
            document.querySelector('.tecla_puff').onclick = tocaSompuff;


        function tocaSomsplash() {
            document.querySelector('#som_tecla_splash').play();}
            document.querySelector('.tecla_splash').onclick = tocaSomsplash;


        function tocaSomtoim() {
            document.querySelector('#som_tecla_toim').play();}
            document.querySelector('.tecla_toim').onclick = tocaSomtoim;


        function tocaSompsh() {
            document.querySelector('#som_tecla_psh').play();}
            document.querySelector('.tecla_psh').onclick = tocaSompsh;


        function tocaSomtic() {
            document.querySelector('#som_tecla_tic').play();}
            document.querySelector('.tecla_tic').onclick = tocaSomtic;


        function tocaSomtom() {
            document.querySelector('#som_tecla_tom').play();}
            document.querySelector('.tecla_tom').onclick = tocaSomtom;

const listadeteclas =document.querySelectorAll('.tecla')

let contador= 0;

while (contador< listadeteclas.length) {listadeteclas['0'].onclick = tocaSomPom; 
 contador = contador +1;
console.log(contador); 
}