const data = [
    {
        id: 1,
        title: "Jordan 1 Rebellionaire",
        price: 32250,
        stock : 10, 
        category: "High",
        img: "/assets/calzados/1.jpg",
        detail: "El Air Jordan 1 High OG 'Rebellionaire' presenta un diseño único que se relaciona con la mítica narrativa 'Prohibida' del calzado,  tienen todo lo que amas y necesitas."
    },
    {
        id: 2,
        title: "Jordan 1 Low Cardinal Red",
        price: 47550,
        stock : 8, 
        category: "Low",
        img: "/assets/calzados/2.jpg",
        detail:"El Air Jordan 1 Low Cardinal Red tiene cordones rojos que se encuentran sobre una lengüeta blanca. El logo de la zapatilla se encuentra en la parte superior de la lengüeta en rojo." 

    },
    {
        id: 3,
        title: "Jordan 1 Barely Orange",
        price: 50000,
        stock : 4, 
        category: "High",
        img: "/assets/calzados/3.jpg",
        detail:"Las zapatillas Nike Air Jordan 1 Mid están inspiradas en las Air Jordan 1 originales que llevan batiendo récords desde el año 1985, diseñadas exclusivamente para Mike"
    },
    {
        id: 4,
        title: "Jordan 1 Low Shadow Toe",
        price: 35500,
        stock : 6, 
        category: "Low",
        img: "/assets/calzados/4.jpg",
        detail:"El Air Jordan 1 Low Shadow Toe (2021) es una versión elegante y con estilo de la silueta clásica de Jordan 1. Lo más destacado de este zapato es la caja Shadow Toe."
    },
    {
        id: 5,
        title: "Jordan 6 Retro UNC White",
        price: 105500,
        stock : 14, 
        category: "High",
        img: "/assets/calzados/5.jpg",
        detail:"El Air Jordan 6 UNC White (GS) presenta una parte superior de nubuck azul claro que se complementa con revestimientos de cuero blanco. La lengüeta translúcida presenta un diseño tribal."
    },
    {
        id: 6,
        title: "Jordan 1 Dark Marina Blue",
        price: 65300,
        stock : 3, 
        category: "High",
        img: "/assets/calzados/6.jpg",
        detail:"En la parte superior de una entresuela blanca, las capas inferiores de cuero negro liso crean una superficie premium para las capas superpuestas de cuero Dark Marina Blue, los ojales y Swoosh."
    },
    {
        id: 7,
        title: "Jordan 1 Low Travis Scott",
        price: 178500,
        stock : 2, 
        category: "Low",
        img: "/assets/calzados/7.jpg",
        detail:"Travis Scott y Jordan Brand colaboran en un Air Jordan 1 Low, tomando señales de diseño similares de la versión de caña alta. Un Swoosh de gran tamaño orientado hacia atrás se destaca."
    },
    {
        id: 8,
        title: "Jordan 1 Off-White Blue",
        price: 35500,
        stock : 6, 
        category: "High",
        img: "/assets/calzados/8.jpg",
        detail:"El tercer lanzamiento de la colaboración entre Nike y Off - White c / o Virgil Abloh, el Air Jordan 1 Retro High Off - White University Blue y su azul cielo que llama la atencion."
    },
];

export default function getItems () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
}

export  function getSingleItem (idItem) {
    return new Promise ((resolve, reject) => {
        let itemFind = data.find((item) => {
            return item.id === parseInt(idItem)
        });
        setTimeout (() => {
            if(itemFind) resolve(itemFind);
            else reject (new Error ('Item NO disponible'))  
        }, 1500)
    });
}

export  function getItemsByCategory (cat) {
    return new Promise ((resolve, reject) => {
        let itemFind = data.filter((item) => {
            return item.category === cat;
        });
        setTimeout (() => {
            if(itemFind) resolve(itemFind);
            else reject (new Error ('Item NO disponible'))  
        }, 1500)
    });
}