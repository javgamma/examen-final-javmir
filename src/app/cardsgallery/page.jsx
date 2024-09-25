"use client";
import React, { useState, useEffect } from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import GallerySq from "./GallerySq";

const Cardsgallery = () => {
  // async function getCoffee() {
  //   const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
  //   return response.json();

  // };

  // const [products, setProducts] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
  //   const data = await response.json();
  //   return data;
  // };

  // const getCoffee = async () => {
  //   const coffeeProducts = await fetchData();
  //   console.log(coffeeProducts);
  //   setProducts(coffeeProducts);
  // };

  // useEffect(() => {
  //   getCoffee();
  // }, []);

  // const query = useQuery(
  //   [coffeeData],
  //   getCoffee
  // );



  return (
    <div>
      <GallerySq />

      {/* <Cardsection products={products} />  */}
    </div>
  );
};

export default Cardsgallery;
