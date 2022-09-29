import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import getItems, { getItemsByCategory } from "../../services/mockAPI"


function ItemListContainer(props) {
    let {greeting} = props;
    let [data, setData] = useState([]);
    
    const {cat} = useParams();

    useEffect(() => {
        if (cat === undefined){
            getItems().then((respuestaDatos) => setData(respuestaDatos));
        }
        else {
            getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
        }
        },[cat])

    return (
        <div>
            <h1> {greeting}</h1>
            <div className="main container">
                <ItemList data={data}/>
            </div>
        </div>
    );
}

export default ItemListContainer;

  