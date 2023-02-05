import { removeFromBasket } from "@/slices/basketSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

function CheckOutPorduct({ key, item }) {
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image src={item.image} width={100} height={100} />

      <div className="col-span-3 mx-5">
        <h1 className="mb-1 border-3">{item.title}</h1>
        <p className="text-xs my-2 line-clamp-3">{item.description}</p>
        <p>
          <span>₹</span>
          {item.price}
        </p>
      </div>

      <div className="flex flex-col sp-y-2 my-auto justify-self-end">
        {/* <button className="buttom mb-2">Add to basket</button> */}
        <button
          onClick={() => removeItemFromBasket(item.id)}
          className="buttom "
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CheckOutPorduct;
