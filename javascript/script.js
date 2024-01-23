/*document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("bar");

    // Agrega un listener para el evento de desplazamiento
    window.addEventListener("scroll", function() {
        // Obtén la posición de desplazamiento vertical
        var scrollTop = window.scrollY;

        // Aplica el desenfoque solo cuando el desplazamiento es mayor que 0
        header.style.backdropFilter = scrollTop > 0 ? "blur(10px)" : "blur(0)";
    });
});*/


function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}

function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}

function opacidad_inicial(inicio,servicios){
    
    document.addEventListener("DOMContentLoaded", function () {
        var seccionImagen = document.getElementById(inicio);
        var seccionColor = document.getElementById(servicios);

        if (seccionImagen && seccionColor) {
            var zIndexEspecifico = 100;

            function actualizarEstilos() {
                var scrollY = window.scrollY;
                var opacidad = (scrollY - seccionColor.offsetTop + window.innerHeight) / window.innerHeight;
                opacidad = Math.min(1, Math.max(0, opacidad));

                seccionImagen.style.opacity = (scrollY > 0) ? 1 - opacidad : 1;
                seccionImagen.style.zIndex = (scrollY > 0) ? zIndexEspecifico : 0;
            }

            // Aplica estilos al cargar la página
            actualizarEstilos();

            // Agrega un listener para el evento de desplazamiento
            window.addEventListener("scroll", function () {
                actualizarEstilos();
                });
            }
        });

}

function transicion(){
    
        /*agregar transiciones suaves, ver otra forma mas sencilla*/

        document.addEventListener('DOMContentLoaded', function() {
            // Selecciona todos los enlaces que tienen href con #
            var enlaces = document.querySelectorAll('a[href^="#"]');
    
            // Ajusta la distancia desde la parte superior que prefieras (puedes cambiar este valor)
            var distanciaDesdeArriba = 64;
    
            // Agrega un evento de clic a cada enlace
            enlaces.forEach(function(enlace) {
                enlace.addEventListener('click', function(e) {
                e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
                // Obtiene el ID de la sección desde el href del enlace
                var objetivoId = this.getAttribute('href').substring(1);
                var objetivo = document.getElementById(objetivoId);
    
                // Calcula la posición de desplazamiento ajustada
                var posicionAjustada = objetivo.offsetTop - distanciaDesdeArriba;
    
                // Utiliza el método scrollIntoView para desplazar suavemente a la sección
                window.scrollTo({ top: posicionAjustada, behavior: 'smooth' });
                });
            });
            });
}








/*
function ocultarMenu() {
    var menu = document.getElementById("menu");
        menu.style.display = "none";
  }**/

