import React from "react"
import { FaShoppingBasket } from "react-icons/fa"

export default function Basket() {
  return (
    <div id="basket" className="fixed bottom-0 left-0 z-50 flex flex-row cursor-pointer lg:bottom-auto lg:left-auto lg:top-0 lg:right-0 lg:absolute Header__summary snipcart-summary snipcart-checkout">
      {/* <div className="Header__summary__title"></div> */}
      <div className="flex flex-row Header__summary__line">
        <div className="relative items-center p-4 pl-10 text-red-800 transition duration-300 lg:py-1 bg-sugar-pink lg:bg-white lg:rounded-bl lg:rounded-br hover:bg-sugar-pink-500 focus:bg-sugar-pink-500">
          <FaShoppingBasket className="absolute left-0 w-5 h-5 ml-2 -mt-px text-lg transform -translate-y-1/2 fill-current top-1/2" />
          <span className="snipcart-total-price">£0.00</span>
        </div>
      </div>
    </div>
  )
}
