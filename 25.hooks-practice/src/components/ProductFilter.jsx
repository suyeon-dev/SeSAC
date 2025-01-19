import React, { useState, useMemo } from 'react';

const ProductFilter = () => {
  // 상품 가격 제한 상태 관리
  const [priceLimit, setPriceLimit] = useState('');

  const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 50 },
    { name: 'Product C', price: 70 },
  ];

  const filteredProducts = useMemo(() => {
    // console.log(products);
    // console.log(priceLimit);
    if (!priceLimit) return products;

    // 여기에 필터링 로직 작성
    return products.filter((product) => product.price <= priceLimit);
  }, [priceLimit]);

  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type='number'
        value={priceLimit}
        onChange={(e) => setPriceLimit(Number(e.target.value))}
        placeholder='Enter price limit'
      />
      <ul>
        {/* 상품 목록 나열 로직 작성 */}
        {filteredProducts.map((product) => (
          <li key={product.name}>
            {product.name} -${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
