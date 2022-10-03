import { Routes, Route } from 'react-router-dom';
import CategoriesPreviewList from "../categories-preview/categories-preview";
import Category from '../category/category';

import "./shop.scss";
const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreviewList />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop