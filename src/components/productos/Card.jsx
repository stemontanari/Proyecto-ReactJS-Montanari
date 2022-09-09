import "./card.css"
import Button from "../button/Button";

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
            <Button text=" Ver más" />
        </div>
    )
}

export default Card; 