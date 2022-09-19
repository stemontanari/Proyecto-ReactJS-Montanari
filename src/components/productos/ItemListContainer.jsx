import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

import getItems from "../../services/mockAPI"


function ItemListContainer(props) {
    let {greeting} = props;
    let [data, setData] = useState([]);

    useEffect(() => {
            getItems().then((respuestaDatos) => {
                setData(respuestaDatos)
            });
        },[])

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

  