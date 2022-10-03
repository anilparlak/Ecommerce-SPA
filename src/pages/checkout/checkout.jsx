import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { CardContext } from "../../contexts/card";
import "./checkout.scss";

const Checkout = () => {
  const {cardItems,cardTotal} = useContext(CardContext)
  return (
    <div className='checkout-container'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cardItems.map((cardItem) => (
      <CheckoutItem key={cardItem.id} cardItem={cardItem} />
    ))}
    <div className='total'>TOTAL: ${cardTotal}</div>
  </div>
  )
}

export default Checkout