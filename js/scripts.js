
addEventListener('DOMContentLoaded', () => {
    document.getElementById('verMemorium').addEventListener('click', mostrarMemorium);
    document.getElementById('verCalcuRedes').addEventListener('click', mostrarCalcuRedes);
    document.getElementById('verMapis').addEventListener('click', mostrarMapis);
    document.getElementById('volverMemorium').addEventListener('click', volver);
    document.getElementById('volverCalcuRedes').addEventListener('click', volver);
    document.getElementById('volverMapis').addEventListener('click', volver);

});

function ocultaTitulo() {
    const element = document.getElementById('titulo');
    element.style.display = 'none';
}

function mostrarMemorium() {
    ocultaTitulo();
    const element = document.getElementById('proyectos');
    proyectos.style.display = 'none';
    const verMemorium = document.getElementById('memoriumDetalles');
    verMemorium.style.display = 'block';


}

function mostrarCalcuRedes() {
    ocultaTitulo();
    const element = document.getElementById('proyectos');
    proyectos.style.display = 'none';
    const verCalcuRedes = document.getElementById('calcuRedesDetalles');
    verCalcuRedes.style.display = 'block';
}

function mostrarMapis() {
    ocultaTitulo();
    const element = document.getElementById('proyectos');
    proyectos.style.display = 'none';
    const verMapis = document.getElementById('mapisDetalles');
    verMapis.style.display = 'block';
}

function volver() {
    location.reload();
}
