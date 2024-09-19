
import React from 'react'
import CardCatalogue from './CardCatalogue'

const Cardsection = ({products}) => {
  return (
    <div >
    <h2 className="flex text-[#2a5b45] text-2xl font-normal">Ultimos origenes</h2>
    <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6 ${products.available}">
      {products.map((coffee,i) => (
        <CardCatalogue
          key={i}
          id={coffee._id}
          brand={coffee.brand}
          img={coffee.img_url}
          price={coffee.price}
          available={coffee.available}
         
        />
      ))}
    </div>
  
  </div>
  )
}

export default Cardsection
