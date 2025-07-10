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
