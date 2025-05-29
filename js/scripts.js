const boton = document.createElement('button');
boton.textContent = 'Ocultar';
document.body.appendChild(boton);

boton.addEventListener('click', () => {
    boton.style.display = 'none';
});