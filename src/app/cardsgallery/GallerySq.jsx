"use client";
import React from "react";
import CardCatalogue from "./CardCatalogue";
import { useQuery } from "@tanstack/react-query";

const GallerySq = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://cafe-de-alturanew.vercel.app/api/products"
      );
      return await response.json();
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <div className="ml-[320px] p-4">
      {" "}
 
      <h2 className="text-[#2a5b45] text-2xl font-semibold text-center mb-6">
        Últimos origenes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {" "}
        
        {data.map((coffee) => (
          <CardCatalogue
            key={coffee._id}
            id={coffee._id}
            brand={coffee.brand}
            img={coffee.img_url}
            price={coffee.price}
            available={coffee.available}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySq;
