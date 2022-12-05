'use strict';

/*
 *  JAIME
 */

let productos = [
    {
        id: 1,
        nombre: 'Assasins Creed II PS3',
        descripcion: 'Juego de Assasins Creed II en su versión para Playstation 3',
        precio: 4500,
        imagen: 'assasins-creed-ps3.jpg',
        categoría: 'PS3',
        items : 1,
    },
    {
        id: 2,
        nombre: 'God of War PS3',
        descripcion: 'Juego de God of War en su versión para Playstation 3',
        precio: 3500,
        imagen: 'god-of-war-ps3.jpg',
        categoría: 'PS3',
        items : 1,
    },
    {
        id: 3,
        nombre: 'Destiny PS4',
        descripcion: 'Juego de Destiny en su versión para Playstation 4',
        precio: 6500,
        imagen: 'destiny-ps4.jpg',
        categoría: 'PS4',
        items : 1,
    },
    {
        id: 4,
        nombre: 'Resident Evil 2 PS4',
        descripcion: 'Juego de Resident Evil 2 en su versión para Playstation 4',
        precio: 7500,
        imagen: 'resident-evil-4-ps4.jpg',
        categoría: 'PS4',
        items : 1,
    },
    {
        id: 5,
        nombre: 'Injustice 2 PS5',
        descripcion: 'Juego de Injustice 2 en su versión para Playstation 5',
        precio: 10500,
        imagen: 'injustice-2-ps5.jpg',
        categoría: 'PS5',
        items : 1,
    },
    {
        id: 6,
        nombre: 'GTA V PS5',
        descripcion: 'Juego de GTA V en su versión para Playstation 5',
        precio: 12500,
        imagen: 'gta-v-ps5.jpg',
        categoría: 'PS5',
        items : 1,
    },
];


let  carrito = [];


productos.forEach( (producto) => {
    
    const div = document.getElementById('productos');
    const card = document.createElement('div');
    div.appendChild(card);
    const cardTitulo = document.createElement('h3');
    cardTitulo.innerText = `${producto.nombre}`;
    cardTitulo.setAttribute('class', 'tituloDelProducto');
    card.appendChild(cardTitulo);
    


    /*IMAGEN*/
    const imagen = document.createElement('img');
    card.prepend(imagen);
    imagen.setAttribute('src', `${producto.imagen}`);
    imagen.setAttribute('alt', 'Nombre del producto');





} )
