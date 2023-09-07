
import React from 'react';

import { PlusSquare } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          ${product.price.toFixed(2)}
        </div>
        <div className="add-to-cart">
          <button>
            <PlusSquare color="white" size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;