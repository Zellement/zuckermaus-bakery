import React from "react"
import ArrowLink from "./atoms/ArrowLink"

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
        <p className="mt-10 text-sm">
          © Zuckermaus Bakery |{" "}
          <a href="https://www.zellement.com">Web Design by Zellement</a>
        </p>
      </div>
    </div>
  )
}
