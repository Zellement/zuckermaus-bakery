import React from "react"

export default function ContactForm() {
  return (
    <form
      netlify-honeypot="_gotcha"
      action="/thanks"
      data-netlify="true"
      className="flex flex-col flex-wrap gap-8 md:flex-row"
      name="contact"
      method="POST"
    >
      <div className="hidden">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          <span className="block">
            Do not fill out this field if you are human
          </span>
          <input name="_gotcha" />
        </label>
      </div>
      <div className="flex flex-col flex-1 space-y-4">
        <label className="flex flex-col w-full p-1 space-y-1">
          <span className="block">Name *</span>
          <input
            required
            type="text"
            className="w-full"
            name="name"
            placeholder="e.g. Jane Smith"
          />
        </label>
        <label className="flex flex-col w-full p-1 space-y-1">
          <span className="block">Email *</span>
          <input
            required
            type="email"
            className="w-full"
            name="email"
            placeholder="e.g. janesmith@gmail.com"
          />
        </label>
        <label className="flex flex-col w-full p-1 space-y-1">
          <span className="block">Telephone *</span>
          <input
            required
            type="tel"
            className="w-full"
            name="telephone"
            placeholder="e.g. 07700 000 000"
          />
        </label>
      </div>
      <div className="flex flex-col flex-1 space-y-4">
        <label className="flex flex-col w-full p-1 space-y-1">
          <span className="block">Order Number</span>
          <input
            type="text"
            className="w-full"
            name="order-number"
            placeholder="e.g. 51735"
          />
        </label>
        <label className="flex flex-col flex-grow w-full p-1 space-y-1">
          <span className="block">Your message *</span>
          <textarea
            required
            type="text"
            className="flex-grow w-full"
            name="message"
            placeholder="Type your message here"
          ></textarea>
        </label>
      </div>
      <div className="flex flex-col w-full p-1 mt-4 space-y-1">
        <input
          type="submit"
          className="self-end text-white transition duration-300 bg-red-500 rounded cursor-pointer hover:bg-red-700 focus:bg-red-700"
          value="Send Enquiry"
        />
      </div>
    </form>
  )
}
