const data = [
    {
        id: 1,
        title: "Jordan 1 Rebellionaire",
        price: 32250,
        stock : 6, 
        category: "Nike High",
        img: "https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-retro-high-og-rebellionaire-air-jordan-kikikickz-563016_800x.jpg?v=1647007535",
        detail: "El Air Jordan 1 High OG 'Rebellionaire' presenta un diseño único que se relaciona con la mítica narrativa 'Prohibida' del calzado,  tienen todo lo que amas y necesitas."
    },
    {
        id: 2,
        title: "Jordan 1 Low Cardinal Red",
        price: 47550,
        stock : 8, 
        category: "Nike Low",
        img: "https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-low-cardinal-red-air-jordan-kikikickz-319063_800x.jpg?v=1651667250",
        detail:"El Air Jordan 1 Low Cardinal Red tiene cordones rojos que se encuentran sobre una lengüeta blanca. El logo de la zapatilla se encuentra en la parte superior de la lengüeta en rojo." 

    },
    {
        id: 3,
        title: "Jordan 1 Barely Orange",
        price: 50000,
        stock : 4, 
        category: "Nike Mid",
        img: "https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-mid-barely-orange-air-jordan-kikikickz-481549_800x.progressive.jpg?v=1617106994",
        detail:"Las zapatillas Nike Air Jordan 1 Mid están inspiradas en las Air Jordan 1 originales que llevan batiendo récords desde el año 1985, diseñadas exclusivamente para Mike"
    },
    {
        id: 4,
        title: "Jordan 1 Low Shadow Toe",
        price: 35500,
        stock : 6, 
        category: "Nike Low",
        img: "https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-low-shadow-toe-air-jordan-kikikickz-578904_800x.jpg?v=1649245166",
        detail:"El Air Jordan 1 Low Shadow Toe (2021) es una versión elegante y con estilo de la silueta clásica de Jordan 1. Lo más destacado de este zapato es la caja Shadow Toe."
    },
    {
        id: 5,
        title: "Jordan 6 Retro UNC White",
        price: 105500,
        stock : 14, 
        category: "Nike Jordan",
        img: "https://images.stockx.com/360/Air-Jordan-6-Retro-UNC-White/Images/Air-Jordan-6-Retro-UNC-White/Lv2/img20.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1646168713&h=384&q=60",
        detail:"El Air Jordan 6 UNC White (GS) presenta una parte superior de nubuck azul claro que se complementa con revestimientos de cuero blanco. La lengüeta translúcida presenta un diseño tribal."
    },
    {
        id: 6,
        title: "Jordan 1 Dark Marina Blue",
        price: 65300,
        stock : 3, 
        category: "Nike High",
        img: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Dark-Marina-Blue/Images/Air-Jordan-1-Retro-High-OG-Dark-Marina-Blue/Lv2/img19.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1641935382&h=384&q=57",
        detail:"En la parte superior de una entresuela blanca, las capas inferiores de cuero negro liso crean una superficie premium para las capas superpuestas de cuero Dark Marina Blue, los ojales y Swoosh."
    },
    {
        id: 7,
        title: "Jordan 1 Low Travis Scott",
        price: 178500,
        stock : 2, 
        category: "Nike Low",
        img: "https://images.stockx.com/360/Air-Jordan-1-Retro-Low-Travis-Scott/Images/Air-Jordan-1-Retro-Low-Travis-Scott/Lv2/img19.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1634915513&h=384&q=57",
        detail:"Travis Scott y Jordan Brand colaboran en un Air Jordan 1 Low, tomando señales de diseño similares de la versión de caña alta. Un Swoosh de gran tamaño orientado hacia atrás se destaca."
    },
    {
        id: 8,
        title: "Jordan 1 Off-White Blue",
        price: 35500,
        stock : 6, 
        category: "Nike High",
        img: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-Off-White-University-Blue/Images/Air-Jordan-1-Retro-High-Off-White-University-Blue/Lv2/img21.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1634917617&h=384&q=57",
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