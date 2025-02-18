// Obtención de elementos del DOM
const caficultura = document.getElementById('caf');
const colombia = document.getElementById('cac');
const mexico = document.getElementById('api');

const nombre = document.getElementById('nompa');
const texto = document.getElementById('infpa');
const imagPrincipal = document.querySelector('.zonaimg img'); // Asumiendo que esta es la imagen principal que deseas cambiar

// Selecciona todos los elementos de la lista de navegación
const arreglo = document.querySelectorAll('.nav-item');

// Función para activar los eventos de clic en los elementos de navegación
function activo() {
    arreglo.forEach(item => {
        item.onclick = function() {
            quitarColor(); // Quitar clase 'activo' de todos los elementos
            item.classList.add('activo'); // Añadir clase 'activo' al elemento clicado
            nombre.textContent = item.textContent; // Actualizar el nombre 
            actualizarInformacion(item.textContent); // Actualizar información 
        }
    });
}

// Llama a la función para activar los eventos
activo();

// Función para quitar la clase 'activo' de todos los elementos
function quitarColor() {
    arreglo.forEach(item => {
        item.classList.remove('activo');
    });
}

// Función para actualizar la información y la imagen según  seleccionado
function actualizarInformacion(cultivo) {
    let imgSrc, infoTexto;

    switch (cultivo) {
        case 'Caficultura':
            imgSrc = 'img/cafe.jpg'; // Imagen para Caficultura
            infoTexto = 'En nuestra granja, cultivamos café con dedicación, eligiendo cuidadosamente las variedades que mejor se adaptan a nuestro clima y suelo. Nos enfocamos en prácticas sostenibles, asegurando que cada planta reciba el cuidado necesario para crecer saludable. La cosecha se realiza manualmente, seleccionando solo los granos maduros para garantizar la mejor calidad en cada taza. Estamos comprometidos con el respeto al medio ambiente y el bienestar de nuestra comunidad, ofreciendo un café excepcional que refleja nuestra pasión por la agricultura.';
            break;
        case 'Apicultura':
            imgSrc = 'img/abejas.webp'; // Imagen para Apicultura
            infoTexto = 'En nuestra granja, la apicultura es una actividad que realizamos con gran dedicación. Nos enfocamos en proporcionar un entorno rico en flores para nuestras abejas, lo que les permite recolectar néctar de alta calidad. Monitoreamos cuidadosamente la salud de nuestras colonias, asegurándonos de que tengan suficiente alimento y espacio para prosperar. Cuando llega el momento de la cosecha, extraemos la miel de manera cuidadosa y sostenible, garantizando que nuestras abejas tengan lo necesario para su bienestar. Nuestro compromiso con la apicultura no solo nos permite ofrecer miel deliciosa, sino que también contribuye a la polinización de nuestros cultivos y al equilibrio del ecosistema';
            break;
        case 'Cacaocultura':
            imgSrc = 'img/cacao.jpg'; // Imagen para Cacaocultura
            infoTexto = 'En nuestra granja, el proceso para producir cacao comienza con la selección de las mejores variedades de cacao que se adaptan a nuestro clima y suelo. Plantamos las semillas en un entorno cuidado, asegurándonos de que cada planta reciba la atención necesaria para crecer fuerte y saludable. Una vez que las mazorcas están maduras, las cosechamos a mano, eligiendo solo las mejores. Luego, procedemos a fermentar los granos, un paso crucial que desarrolla su sabor característico. Después de la fermentación, secamos los granos al sol para reducir la humedad y preservar su calidad. Finalmente, los granos se tuestan y procesan para convertirlos en el delicioso chocolate que todos disfrutamos.';
            break;
        default:
            imgSrc = 'img/default.png'; // Imagen por defecto si no se encuentra el país
            infoTexto = 'Información no disponible';
    }

    // Actualiza solo la imagen principal en la sección de información
    imagPrincipal.setAttribute('src', imgSrc);
    
    // Actualiza el texto de información
    texto.textContent = infoTexto; 
}