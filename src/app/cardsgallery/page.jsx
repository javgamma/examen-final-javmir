"use client"
import React, { useState, useEffect } from 'react';
import Cardsection from './Cardsection';

const Cardsgallery = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
    const data = await response.json();
    return data;
  };

  const getCoffee = async () => {
    const coffeeProducts = await fetchData();
    console.log(coffeeProducts);
    setProducts(coffeeProducts);
  };

  useEffect(() => {
    getCoffee(); 
  }, []);

  return (
    <div>
      <Cardsection products={products} /> 
    </div>
  );
};

export default Cardsgallery;
