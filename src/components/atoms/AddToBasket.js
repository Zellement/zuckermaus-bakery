import React from "react"
import IconCheckmark from "../../components/atoms/IconCheckmark"
import { FaShoppingBasket } from "react-icons/fa"
import NumberFormat from "react-number-format"

export default function AddToBasket( {name, description, volumeSize, price, id} ) {
  return (
    <button
      // https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
      onClick={() => {
        IconCheckmark(id)
      }}
      className="relative flex flex-col items-center w-full p-4 text-white transition duration-300 border Product__buy Product snipcart-add-item bg-red hover:bg-sugar-pink hover:text-sugar-pink-900 focus:border-red-800 focus:outline-none"
      data-item-id={name + " | " + volumeSize}
      data-item-price={price}
      // data-item-image={product.gallery[0].fluid.url && product.gallery[0].fluid.url}
      data-item-description={description}
      data-item-name={name + " | " + volumeSize}
      data-item-url={
        `https://www.zuckermausbakery.com/products/` + name + "/"
      }
    >
      <span className="w-full mb-2 font-bold">{volumeSize}</span>

      <span className="flex flex-row justify-between w-full">
        <NumberFormat
          prefix={"£"}
          value={price}
          decimalScale={2}
          displayType={"text"}
          fixedDecimalScale={true}
        />
        <span className="flex flex-row items-center">
          <FaShoppingBasket className="inline-block mr-2 -mt-1" />
          <span>Add to basket</span>
        </span>
      </span>
    </button>
  )
}
