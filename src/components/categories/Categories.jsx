import "./categories.scss";
import categories from "../../categories.json";
import Category from "../category/Category";


const Categories = () => {
  return (
    <div className="categories-container">
        {
            categories.map((category) => (
                <Category key={category.id} category={category}/>
            ))
        }
    </div>
  )
}

export default Categories