import { useNavigate } from "react-router-dom";
import "./category.scss";

const Category = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/shop/${title}`)
    }
  return (
    <div className='category-component-container' onClick={handleClick}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-component-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default Category