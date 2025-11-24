const productos = [
    {
        nombre: "Cadena Shimano",
        precio: 25,
        imagen: "https://via.placeholder.com/250x150"
    },
    {
        nombre: "Cámara 29'",
        precio: 10,
        imagen: "https://r.search.yahoo.com/_ylt=AwrNP9EJuyNpK2cx7o2V.Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzExNzc1NzY5YWE2ZTBjMzliNGNiYTc1NGUwMjhkMjhhBGdwb3MDMjQEaXQDYmluZw--/RV=2/RE=1763978122/RO=11/RU=https%3a%2f%2farticulo.mercadolibre.cl%2fMLC-2795226904-camara-bicicleta-arisun-aro-29-x-175235-valvula-francesa-_JM/RK=2/RS=2QmLowux1qTqs7oubNIIgjGK52w-"
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
