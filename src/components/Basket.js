import React from "react"
import { FaShoppingBasket } from "react-icons/fa"

export default function Basket() {
  return (
    <div id="basket" className="flex flex-row cursor-pointer Header__summary snipcart-summary snipcart-checkout">
      {/* <div className="Header__summary__title"></div> */}
      <div className="flex flex-row Header__summary__line">
        <div className="relative items-center p-1 pl-10 text-red-800 transition duration-300 bg-white rounded hover:bg-red-500 focus:bg-red-500 hover:shadow-lg focus:shadow-lg hover:text-white focus:text-white">
          <FaShoppingBasket className="absolute left-0 w-5 h-5 ml-2 -mt-px text-lg transform -translate-y-1/2 fill-current top-1/2" />
          <span className="snipcart-total-price">£0.00</span>
        </div>
      </div>
    </div>
  )
}
