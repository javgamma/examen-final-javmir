"use client";
import React from "react";
import CardCatalogue from "./CardCatalogue";
import { useQuery } from "@tanstack/react-query";

const SkeletonCard = () => (
  <div className="flex flex-col items-center justify-center text-center gap-6 w-64 h-[391px] m-2 border rounded-lg hover:shadow-xl border-solid border-gray-300 animate-pulse">
    <div className="w-32 h-48 bg-gray-400 rounded-xl"></div>
    <div className="flex flex-col gap-3 ">
      <div className="h-4 bg-gray-300 rounded w-[90px] flex"></div>
      <div className="h-4 bg-gray-200 rounded w-[40px] flex justify-center"></div>
    </div>
    <div className="h-10 bg-gray-400 rounded w-[80px]"></div>
  </div>
);

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

  if (isLoading) {
    return (
      <div className="ml-[320px] p-4">
        <h2 className="text-[#2a5b45] text-2xl font-semibold text-center mb-6">
          Últimos origenes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {Array(8).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return "Ha ocurrido un error: " + error.message;
  console.log(data);

  return (
    <div className="ml-[320px] p-4">
     <h2 className="text-[#2a5b45] text-2xl font-semibold text-center mb-6">
        Últimos origenes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
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
