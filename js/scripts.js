
    document.addEventListener('DOMContentLoaded', () => {
        // Botones para cambiar de idioma
        const botonEn = document.getElementById("en");
        const botonEs = document.getElementById("es");
        const contenidoEn = document.getElementById("contenido-en");
        const contenidoEs = document.getElementById("contenido-es");

        if (botonEn && botonEs && contenidoEn && contenidoEs) {
            botonEn.addEventListener("click", () => {
                contenidoEs.style.display = "none";
                contenidoEn.style.display = "block";
            });

            botonEs.addEventListener("click", () => {
                contenidoEn.style.display = "none";
                contenidoEs.style.display = "block";
            });
        } else {
            console.error("❌ Uno o más elementos de idioma no se encontraron");
        }

        // Botones para ver proyectos
        const memoriumBtn = document.getElementById('verMemorium');
        const calcuRedesBtn = document.getElementById('verCalcuRedes');
        const mapisBtn = document.getElementById('verMapis');
        const volverMemoriumBtn = document.getElementById('volverMemorium');
        const volverCalcuRedesBtn = document.getElementById('volverCalcuRedes');
        const volverMapisBtn = document.getElementById('volverMapis');

        if (memoriumBtn) memoriumBtn.addEventListener('click', mostrarMemorium);
        if (calcuRedesBtn) calcuRedesBtn.addEventListener('click', mostrarCalcuRedes);
        if (mapisBtn) mapisBtn.addEventListener('click', mostrarMapis);
        if (volverMemoriumBtn) volverMemoriumBtn.addEventListener('click', volver);
        if (volverCalcuRedesBtn) volverCalcuRedesBtn.addEventListener('click', volver);
        if (volverMapisBtn) volverMapisBtn.addEventListener('click', volver);
    });

    function ocultaTitulo() {
        const titulo = document.getElementById('titulo');
        if (titulo) titulo.style.display = 'none';
    }

    function mostrarMemorium() {
        ocultaTitulo();
        const proyectos = document.getElementById('proyectos');
        const memorium = document.getElementById('memoriumDetalles');
        if (proyectos && memorium) {
            proyectos.style.display = 'none';
            memorium.style.display = 'block';
        }
    }

    function mostrarCalcuRedes() {
        ocultaTitulo();
        const proyectos = document.getElementById('proyectos');
        const calcu = document.getElementById('calcuRedesDetalles');
        if (proyectos && calcu) {
            proyectos.style.display = 'none';
            calcu.style.display = 'block';
        }
    }

    function mostrarMapis() {
        ocultaTitulo();
        const proyectos = document.getElementById('proyectos');
        const mapis = document.getElementById('mapisDetalles');
        if (proyectos && mapis) {
            proyectos.style.display = 'none';
            mapis.style.display = 'block';
        }
    }

    function volver() {
        location.reload();
    }
