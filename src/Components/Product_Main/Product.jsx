import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../BreadCrum/BreadCrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import RelatedProduct from "../Related_Products /RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </>
  );
};

export default Product;
