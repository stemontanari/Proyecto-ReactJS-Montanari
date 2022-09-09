import React from "react";
import Card from "./Card";

function ItemListContainer(props) {
    let {greeting} = props;
    return (
        <div>
            <h1> {greeting}</h1>
            <div className="main container">
                <Card 
                    title="Jordan 1 Rebellionaire" 
                    description="El Air Jordan 1 High OG 'Rebellionaire' presenta un diseño único que se relaciona con la mítica narrativa 'Prohibida' del calzado,  tienen todo lo que amas y necesitas." 
                    price={32250} 
                    img="https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-retro-high-og-rebellionaire-air-jordan-kikikickz-563016_800x.jpg?v=1647007535"
                />
                
                <Card 
                    title="Jordan 1 Low Cardinal Red" 
                    description="El Air Jordan 1 Low Cardinal Red tiene cordones rojos que se encuentran sobre una lengüeta blanca. El logo de la zapatilla se encuentra en la parte superior de la lengüeta en rojo." 
                    price={47550} 
                    img="https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-low-cardinal-red-air-jordan-kikikickz-319063_800x.jpg?v=1651667250"
                />
                
                <Card 
                    title="Jordan 1 Barely Orange" 
                    description="Las zapatillas Nike Air Jordan 1 Mid están inspiradas en las Air Jordan 1 originales que llevan batiendo récords desde el año 1985, diseñadas exclusivamente para Mike" 
                    price={50000} 
                    img="https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-mid-barely-orange-air-jordan-kikikickz-481549_800x.progressive.jpg?v=1617106994"
                />
                
                <Card 
                    title="Jordan 1 Low Shadow Toe" 
                    description="El Air Jordan 1 Low Shadow Toe (2021) es una versión elegante y con estilo de la silueta clásica de Jordan 1. Lo más destacado de este zapato es la caja Shadow Toe." 
                    price={35500} 
                    img="https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-low-shadow-toe-air-jordan-kikikickz-578904_800x.jpg?v=1649245166"
                />
            </div>
        </div>
    );
  }

  export default ItemListContainer;

  