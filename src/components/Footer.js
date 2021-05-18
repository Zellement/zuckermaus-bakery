import React from "react"
import ArrowLink from "./atoms/ArrowLink"
import { AiFillInstagram } from "react-icons/ai"

export default function Footer() {
  return (
    <div className="w-full p-8 mt-8 text-white bg-red-500 lg:p-16 lg:mt-16">
      <div className="container flex flex-col gap-8 text-base lg:text-lg md:flex-row">
        <div className="w-full md:w-2/3">
          <p className="mb-8 text-lg lg:text-2xl font-display">Get in touch</p>
          <div className="flex flex-col sm:flex-row sm:gap-8">
            <p className="sm:max-w-64">
              Got a question, or want to make a custom order?
            </p>
            <ArrowLink text="Contact Us" destination="/contact/" />
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <p className="mb-8 text-lg lg:text-2xl font-display">Newsletter</p>

          <p>MailChimp account required from Zuckermaus</p>
        </div>
      </div>

      <div className="container">
        <p className="flex flex-col mt-10 space-y-8 text-sm lg:space-y-0 lg:flex-row lg:space-x-8">
          <span>© Zuckermaus Bakery</span>

          <a href="https://www.instagram.com/zuckermaus_bakery/" className="text-xl hover:text-rose-pink-300 focus:text-rose-pink-300" target="_blank" rel="noopener noreferrer"><AiFillInstagram  /></a>

          <a href="https://www.zellement.com" className="hover:text-rose-pink-300 focus:text-rose-pink-300">Web Design by Zellement</a>
        </p>
      </div>
    </div>
  )
}
