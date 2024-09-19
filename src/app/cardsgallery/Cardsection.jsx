
import React from 'react'
import CardCatalogue from './CardCatalogue'

const Cardsection = ({products}) => {
  
  return (
  

  <div className="ml-[320px] p-4"> {/* Margen izquierdo para evitar la sidebar */}
      <h2 className="text-[#2a5b45] text-2xl font-semibold text-center mb-6">Últimos origenes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Grid con 4 columnas */}
        {products.map((coffee, i) => (
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
