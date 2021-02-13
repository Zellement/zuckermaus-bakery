import React from "react"
import { FaShoppingBasket } from 'react-icons/fa'


export default function Basket() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex flex-row cursor-pointer lg:bottom-auto lg:left-auto lg:top-0 lg:right-0 lg:absolute Header__summary snipcart-summary snipcart-checkout">
      <div className="Header__summary__title"></div>
      <div className="flex flex-row Header__summary__line">
        <div className="relative flex flex-row items-center p-4 text-red-800 lg:py-1 bg-sugar-pink lg:bg-transparent lg:text-white">
          <FaShoppingBasket className="mr-2 -mt-px text-lg fill-current" />
          <span className="snipcart-total-price">£0.00</span>
        </div>
      </div>
    </div>
  )
}
