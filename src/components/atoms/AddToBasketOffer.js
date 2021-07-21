import React from "react"
import AddToBasketAnimation from "../../components/atoms/AddToBasketAnimation"
import { FaShoppingBasket } from "react-icons/fa"
import NumberFormat from "react-number-format"
import { useStaticQuery, graphql } from "gatsby"

export default function AddToBasketOffer({
  name,
  description,
  volumeSize,
  price,
  id,
  slug,
  category,
  dealBag
}) {
  
  return (
    <button
      // https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
      onClick={() => {
        AddToBasketAnimation(id)
      }}
      className="relative flex flex-col w-full p-4 text-base font-bold text-left text-red-500 transition duration-300 bg-red-100 Product__buy Product snipcart-add-item hover:bg-red-500 hover:text-red-100 focus:bg-red-500 focus:text-red-100 focus:outline-none"
      data-item-id={name}
      data-item-price={price}
      data-item-name={name}
      data-item-description={description}
      data-item-url={"https://www.zuckermaus-bakery.netlify.com/deals/" + slug + "/"}
    >
      <span className="flex flex-row justify-between w-full">
        <span className="flex flex-row items-center">
          <FaShoppingBasket className="inline-block mr-2 -mt-1" />
          <span>Add deal bag to basket</span>
        </span>
      </span>
    </button>
  )
}
