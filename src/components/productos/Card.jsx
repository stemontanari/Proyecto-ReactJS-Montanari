import "./card.css"
import Button from "../button/Button";
import ItemCounter from "../itemCounter/ItemCounter"

function Card(props) {
    let {title, description, price, img} = props;
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt="card img"></img>
            </div>
            <div className="card-detail">
                <h3> {title}</h3>
                <p> {description}</p>
                <h4> $ {price} </h4>
            </div>
            <Button text=" Agregar al carrito" />
            <ItemCounter initial={1} stock={9}/>
        </div>
    )
}

export default Card; 