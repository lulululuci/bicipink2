const productos = [
    {
        nombre: "Cadena Shimano",
        precio: $2500,
        imagen: "/imagen.tienda/Cadena Shimano.jpg.jpg"
    },
    {
        nombre: "Cámara 29'",
        precio: $5000,
        imagen: "/imagen.tienda/camara 29.jpg.jpg"
    },
    {
        nombre: "Cubierta MTB 29''",
        precio: $10000,
        imagen: "/imagen.tienda/cubierta 29.jpg.jpg"
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


