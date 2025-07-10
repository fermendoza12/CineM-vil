const contenedorPeliculas = document.getElementById("contenedor-peliculas");

peliculas.forEach(pelicula => {
const div = document.createElement("div");
div.classList.add("pelicula");
div.innerHTML = `
<img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
<a class="btn-trailer" href="${pelicula.trailer}" target="_blank">Ver Trailer</a>
<a class="btn-ver" href="${pelicula.enlace}" target="_blank">Ver Película</a>
`;
contenedorPeliculas.appendChild(div);
});




const input = document.getElementById("inputBusqueda");
const clearBtn = document.getElementById("clearInput");
const btnBuscar = document.getElementById("btnBuscar");

function filtrarPeliculas() {
const filtro = input.value.toLowerCase();
const cards = document.querySelectorAll(".pelicula");

peliculas.forEach((peli, i) => {
const tags = peli.tags.join(" ").toLowerCase();
const card = cards[i];
card.style.display = tags.includes(filtro) ? "flex" : "none";
});
}

// Mostrar u ocultar la X
input.addEventListener("input", () => {
clearBtn.style.display = input.value ? "block" : "none";
filtrarPeliculas();
});

// Borrar búsqueda con la X
clearBtn.addEventListener("click", () => {
input.value = "";
clearBtn.style.display = "none";
filtrarPeliculas();
});

// Botón buscar también filtra
btnBuscar.addEventListener("click", filtrarPeliculas);
