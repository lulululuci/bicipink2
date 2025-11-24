const productos = [
    {
        nombre: "Cadena Shimano",
        precio: 25,
        imagen: "https://via.placeholder.com/250x150"
    },
    {
        nombre: "Cámara 29'",
        precio: 10,
        imagen: "https://via.placeholder.com/250x150"
    },
    {
        nombre: "Cubierta MTB 29''",
        precio: 35,
        imagen: "https://via.placeholder.com/250x150"
    }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>Precio: $${p.precio}</p>
        <button>Comprar</button>
    `;

    contenedor.appendChild(card);
});
