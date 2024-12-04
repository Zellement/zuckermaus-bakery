import React from "react"
import AddToBasketAnimation from "../../components/atoms/AddToBasketAnimation"
import { FaShoppingBasket } from "react-icons/fa"
import NumberFormat from "react-number-format"

export default function AddToBasket({
  name,
  description,
  volumeSize,
  price,
  id,
  slug,
  exclude_from_delivery
}) {
  return (
    <button
      // https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
      onClick={() => {
        AddToBasketAnimation(id)
      }}
      className="relative flex flex-col w-full p-4 text-lg font-bold text-left text-red-500 transition duration-300 bg-red-100 Product__buy Product snipcart-add-item hover:bg-red-500 hover:text-red-100 focus:bg-red-500 focus:text-red-100 focus:outline-none"
      data-item-id={name + " | " + volumeSize}
      data-item-price={price}
      // data-item-image={product.gallery[0].fluid.url && product.gallery[0].fluid.url}
      data-item-description={description}
      data-item-name={name + " | " + volumeSize}
      data-item-url={"https://www.zuckermausbakery.com/shop/product/" + slug + "/"}
      data-item-weight={exclude_from_delivery ? 0 : price}
    >
      <span className="w-full mb-2">{volumeSize}</span>

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
