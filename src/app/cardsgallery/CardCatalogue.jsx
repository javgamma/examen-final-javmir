import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const CardCatalogue = ({ id, brand, img, price, available }) => {

  return (
    <div 
      className={`flex flex-col items-center justify-center text-center gap-6 w-[250px] min-h-[391.39px] border rounded-lg hover:shadow-xl border-solid border-[#e3ded7] ${!available ? 'opacity-40' : ''}`}
    >
      <Image src={img} width={219.39} height={219.39} alt="coffe img" />
      <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
        <p>{brand}</p>
        <p className="font-normal">{price.toFixed(2)} €</p>
      </div>
      <Button variant="cards" disabled={!available}>
        {available ? 'Añadir' : 'Agotado'}
      </Button>
    </div>
  );
};

export default CardCatalogue;

