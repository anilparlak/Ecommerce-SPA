import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../contexts/card";
import Button from "../button/Button";
import CardItem from "../card-item/card-item";
import "./card-dropdown.scss";

const CardDropdown = () => {
  const {cardItems} = useContext(CardContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout")
  }
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
          {
            cardItems.map((item) => (
              <CardItem key={item.id} cardItem={item} />
            ))
          }
        </div>
        <Button onClick={goToCheckOutHandler} >Go to checkout</Button>
    </div>
  )
}

export default CardDropdown