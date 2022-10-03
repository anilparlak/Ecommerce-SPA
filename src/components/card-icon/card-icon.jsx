import { useContext } from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { CardContext } from "../../contexts/card";

import "./card-icon.scss";

const CardIcon = () => {
  const {isCardOpen,setIsCardOpen,cardCount} = useContext(CardContext);
  return (
    <div className="cart-icon-container" onClick={()=>setIsCardOpen(!isCardOpen)}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cardCount}</span>
    </div>
  )
}

export default CardIcon