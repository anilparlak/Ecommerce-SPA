import { createContext,useState,useEffect } from "react";

const addCardItem = (cardItems,productToAdd) => {
    const existingCardItem = cardItems.find((cardItem) => cardItem.id === productToAdd.id);

    if(existingCardItem){
        return cardItems.map((cardItem) => (
            cardItem.id === productToAdd.id ? {...cardItem,quantity:cardItem.quantity+1} : cardItem
        ))
    }

    return [...cardItems, {...productToAdd, quantity: 1}]
}

const removeCardItem = (cardItems,cardItemToRemove) => {
    const existingCardItem = cardItems.find((cardItem) => cardItem.id === cardItemToRemove.id);

    if(existingCardItem.quantity === 1) {
        return cardItems.filter(cardItem => cardItem.id !== cardItemToRemove.id);
    }
    return cardItems.map((cardItem) => (
        cardItem.id === cardItemToRemove.id ? {...cardItem,quantity:cardItem.quantity-1} : cardItem
    ))
}
const clearCardItem = (cardItems, cardItemToClear) =>
  cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);

export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => {},
    cardItems: [],
    addItemToCard: () => {},
    removeItemToCard: () => {},
    clearItemFromCard: () => {},
    cardCount: 0,
    cardTotal: 0
})

export const CardProvider = ({children}) => {
    const [isCardOpen,setIsCardOpen] = useState(false);
    const [cardItems,setCardItems] = useState([]);
    const [cardCount,setCardCount] = useState(0);
    const [cardTotal, setCardTotal] = useState(0);

    useEffect(() => {
        const newCardCount = cardItems.reduce((total,cardItem) => total + cardItem.quantity, 0);
        setCardCount(newCardCount)
    },[cardItems]);
    useEffect(() => {
        const newCardTotal = cardItems.reduce(
          (total, cardItem) => total + cardItem.quantity * cardItem.price,
          0
        );
        setCardTotal(newCardTotal);
      }, [cardItems]);
    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems,productToAdd))
    }
    const removeItemToCard = (cardItemToRemove) => {
        setCardItems(removeCardItem(cardItems,cardItemToRemove))
    }
    const clearItemFromCard = (cardItemToClear) => {
        setCardItems(clearCardItem(cardItems, cardItemToClear));
      };
    const value = {isCardOpen,setIsCardOpen,addItemToCard,cardItems,cardCount,removeItemToCard,clearItemFromCard,cardTotal};

    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}