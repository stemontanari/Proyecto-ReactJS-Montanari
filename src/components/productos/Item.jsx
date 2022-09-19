import "./item.css"
import ItemCounter from "../itemCounter/ItemCounter"

function Item(props) {
    let {title, detail, price, img} = props;
    return(
        <div className="Item">
            <div className="Item-img">
                <img src={img} alt="Item img"></img>
            </div>
            <div className="Item-detail">
                <h3> {title}</h3>
                <p> {detail}</p>
                <h4> $ {price} </h4>
            </div>
            <ItemCounter initial={1} stock={9}/>
        </div>
    )
}

export default Item; 