import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "@/slices/basketSlice";
import CheckOutPorduct from "@/components/CheckOutPorduct";
import { useSession } from "next-auth/react";

function Checkout() {
  const basketItems = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session, status } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <div className="lg:flex max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {basketItems.length === 0
                ? "Your basket is empty"
                : "Your basket items"}
            </h1>
            {basketItems.map((item, i) => (
              <CheckOutPorduct key={i} item={item} />
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col bg-white m-5 p-10 shadow-md ">
          {basketItems.length && (
            <>
              <h1>
                Subtotal {basketItems.length} items:
                <span className="font-bold"> {total}</span>
              </h1>
              <button
                disabled={!session}
                className={`buttom my-4 
                ${
                  !session &&
                  `from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed`
                }`}
              >
                {!session ? "Sign In to check Out" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
