import React from 'react';
import { NoRecordsContainer } from "../styles/Products";
import ProductListItem from './ProductListItem';
import {ProductType, ProductListType} from "../ProductTypes";


const ProductList = ({ productList }: ProductListType): JSX.Element => (
    <>
      {productList && productList.length ? (
        productList.map((product: ProductType) => (
          <ProductListItem key={`product-${product.id}`} product={product} />
        ))
       ) : (
        <NoRecordsContainer>You have no products</NoRecordsContainer>
       )}
      
    </>
);

export default ProductList;
