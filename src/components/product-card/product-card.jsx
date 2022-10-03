import { useContext } from "react";
import { CardContext } from "../../contexts/card";
import Button from "../button/Button";
import "./product-card.scss";

const ProductCard = ({product}) => {
  const {name,price,imageUrl} = product;
  const {addItemToCard} = useContext(CardContext)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='interted' onClick={() => addItemToCard(product)} >Add to card</Button>
    </div>
  )
}

export default ProductCard