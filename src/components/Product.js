import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ product }) {

  const dispatch = useDispatch();


  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addToItemBasket = () => {
    // const curProduct = product;
    dispatch(addToBasket(product))
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>
      <Image
        src={product.image}
        width={200}
        height={200}
        objectFit="contain"
        className="m-auto"
      />
      <h4 className="my-3">{product.title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{product.description}</p>
      <p>
        <span>₹</span>
        {product.price}
      </p>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-1 ">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="Prime"
          />
          <p className="text-xs text-gray-500">Free next day delivery</p>
        </div>
      )}
      <button onClick={addToItemBasket} className="mt-auto buttom">Add to card</button>
    </div>
  );
}

export default Product;
