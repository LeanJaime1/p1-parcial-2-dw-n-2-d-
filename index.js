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
    
    
    
    /*DESCRIPCIÓN DEL PRODUCTO*/
    const descripcion = document.createElement('p');
    cardTitulo.after(descripcion);
    descripcion.innerText = `${producto.descripcion}`;
    
    
     /*PRECIO*/
    const precio = document.createElement('p');
    descripcion.after(precio);
    precio.innerText = 'Precio: $';
    const numeroDelPrecio = document.createElement('span');
    precio.appendChild(numeroDelPrecio);
    numeroDelPrecio.innerText = `${producto.precio}`;
    
    
    /*CATEGORÍA*/
    const categoria = document.createElement('p');
    precio.after(categoria);
    categoria.innerText = `${producto.categoría}`;
    
    
    /*BOTÓN*/
    const agregar = document.createElement('button');
    categoria.after(agregar);
    agregar.innerText = 'Agregar';
    
    
    
    agregar.addEventListener('click', () =>{

    /*AGREGAR PRODUCTOS SIN QUE SE REPITAN*/
    const repetir = carrito.some((productoRepetido) =>  productoRepetido.id === producto.id);

    if(repetir) {

        carrito.map((prod) =>{
            if (prod.id === producto.id) {
                prod.items++;
            }
        })
    }   else{

            carrito.push({
            id : producto.id,
            imagen : producto.imagen,
            nombre : producto.nombre,
            descripcion : producto.descripcion,
            precio : producto.precio,
            categoría : producto.categoría,
            items : producto.items,

        });
    }
        console.log(carrito);

        alert('Se agregó un producto al carrito');
    })



} )



/*CARRITO*/
const verCarrito = document.getElementById('carrito');



verCarrito.addEventListener('click',  () =>{
    
    
    /*CAJA*/
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', 'modalCarrito');
    
    
    /*CERRAR*/
    const cerrar = document.createElement('a');
    modal.appendChild(cerrar);
    cerrar.setAttribute('class', 'cerrar');
    cerrar.setAttribute('href', 'javascript:void(0)');
    cerrar.innerText = 'X';
    cerrar.addEventListener('click', () =>{
    modal.style.display =  'none';
    })


    
    /*ITEMS*/
    const items = document.createElement('p');
    cerrar.after(items);
    const spanPrecio = document.createElement('span');
    items.appendChild(spanPrecio);
    spanPrecio.setAttribute('id', 'spanPrecio');
    spanPrecio.innerText = `PRODUCTOS`;


    
    /*SEPARADOR*/
    const separador = document.createElement('hr');
    items.after(separador);

    
    
    /*UL*/
    const contenedorDeLista = document.createElement('ul');
    separador.after(contenedorDeLista);

    
    
    
    /*AGREGO LOS PRODUCTOS AL CARRITO*/
    carrito.forEach((producto) => {

    /*LISTA*/
    const itemsLista = document.createElement('li');
    contenedorDeLista.appendChild(itemsLista);
    itemsLista.innerText = `${producto.nombre}`;
    const span1 = document.createElement('span');
    itemsLista.appendChild(span1);
    span1.innerText = `$${producto.precio}`;
    const span2 = document.createElement('span');
    span1.after(span2);
    span2.innerText = `Items ${producto.items}`;
    const eliminarProducto = document.createElement('a');
    span2.after(eliminarProducto);
    eliminarProducto.innerText = 'Eliminar';
    eliminarProducto.setAttribute('href', '#');
    eliminarProducto.setAttribute('id', 'botonEliminar');
        

    })
    
    
    
    
    /*BOTON VACIAR*/
    const vaciar = document.createElement('button');
    contenedorDeLista.after(vaciar);
    vaciar.setAttribute('id', 'vaciar');
    vaciar.innerText = 'Vaciar';
    
    
    
    
    /*BOTON CHECKOUT*/
    const  checkout = document.createElement('button');
    vaciar.after(checkout);
    checkout.innerText = 'Ir al checkout';
    
    
    
    /*TOTAL PRECIO EN CARRITO*/
    const total = carrito.reduce ((acumulador, elemento) => acumulador + elemento.precio * elemento.items, 0);
    const totalPrecioProductos = document.getElementById('totalProductos');
    totalPrecioProductos.innerText = `${total}`;
    
    
    console.log(totalPrecioProductos);


    console.log(modal);
    
    
    
    
    document.querySelector('body').appendChild(modal);
    
    
    
     /*VACIAR CARRITO */
    vaciar.addEventListener('click',  () =>{
    
    carrito = [];
    console.log(carrito);
    
})

    
})    
   
