//"use client"
//import React from 'react'
//import CardCatalogue from './CardCatalogue'
//import { useQuery, useQueryClient } from '@tanstack/react-query';

// const Cardsection = ({products, CardCatalogue}) => {

  
  // async function getCoffee() {
  //   const response = await fetch("https://cafe-de-alturanew.vercel.app/api/products");
  //   return response.json();
  
  // };

  // const getCoffee = async () => {
  //   const coffeeProducts = await fetchData();
  //   console.log(coffeeProducts);
  //   // setProducts(coffeeProducts);
  //   return coffeeProducts
  // };


// function Coffees(){
//   const{data, status} = useQuery('coffees', getCoffee);
//   if (status === 'loading'){
//      return <div>Recuprando los cafés</div>
//   }

//   if (status=== 'error'){
//     return <p>HA SUCEDIDO UN ERROR</p>
//   }
// }
  


  //return (
  
   

  // <div className="ml-[320px] p-4"> {/* Margen izquierdo para evitar la sidebar */}
  //     <h2 className="text-[#2a5b45] text-2xl font-semibold text-center mb-6">Últimos origenes</h2>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Grid con 4 columnas */}
  //       {data.products.map((coffee, i) => (
  //         <CardCatalogue
  //           key={i}
  //           id={coffee._id}
  //           brand={coffee.brand}
  //           img={coffee.img_url}
  //           price={coffee.price}
  //           available={coffee.available}
  //         />
  //       ))}
  //     </div>
  //   </div>


  //)
//}

// export default Cardsection
