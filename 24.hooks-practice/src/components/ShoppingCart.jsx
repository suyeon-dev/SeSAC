import React, { useState, useCallback, useEffect } from 'react';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

const listStyle = {
  listStyle: 'none',
};

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const checkCart = prev.find((item) => item.id === product.id);

      if (checkCart) {
        alert('이미 장바구니에 추가한 상품입니다.');
        return prev; // 기존 상태 반환(상태 변경 x)
      }
      return [...prev, product]; // 새로운 상태 배열 반환
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    // 장바구니에서 상품 제거 로직 작성
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  // addToCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {
    console.log('addToCart 함수 참조값 변경!');
  }, [addToCart]);

  // removeFromCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {
    console.log('removeFromCart 함수 참조값 변경!');
  }, [removeFromCart]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {/* 상품 목록 */}
        {products.map((product) => (
          <li key={product.id} style={listStyle}>
            {product.name}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {/* 쇼핑 카트에 추가된 목록 */}
        {cart.map((product) => {
          return (
            <li key={product.id} style={listStyle}>
              {product.name}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCartApp;
