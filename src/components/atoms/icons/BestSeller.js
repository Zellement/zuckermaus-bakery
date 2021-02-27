import React from "react"

export default function IconBestSeller({ className }) {
  return (
    <div
      className={
        className +
        " flex flex-row items-center p-2 text-sm text-center font-display space-x-2"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 489.327 489.327"
        width="35"
        height="35"
        className="fill-current"
      >
        <path d="M476.616 273.213l-9.1-12.6c-7.6-10.4-7.7-24.5-.3-35.1l8.9-12.7c10.4-14.8 5.5-35.3-10.3-43.9l-13.6-7.4c-11.3-6.1-17.5-18.8-15.3-31.5l2.6-15.4c3-17.8-10.2-34.3-28.2-35l-15.4-.7c-12.8-.5-23.8-9.3-27.4-21.7l-4.3-15c-5-17.4-24-26.4-40.4-19.2l-14.2 6.2c-11.8 5.1-25.5 2.1-34-7.6l-10.3-11.6c-12-13.5-33-13.3-44.7.3l-10.1 11.8c-8.4 9.7-22 13-33.9 8.1l-14.3-5.9c-16.6-6.9-35.4 2.4-40.2 19.9l-4.1 15c-3.5 12.6-14.4 21.5-27.1 22.2l-15.4.9c-17.9 1-30.9 17.7-27.6 35.4l2.8 15.3c2.3 12.7-3.7 25.5-14.9 31.7l-13.5 7.6c-15.7 8.8-20.2 29.4-9.6 44l9.1 12.6c7.6 10.4 7.7 24.5.3 35.1l-9.1 12.8c-10.4 14.8-5.5 35.3 10.3 43.9l13.6 7.4c11.3 6.1 17.5 18.8 15.3 31.5l-2.5 15.2c-3 17.8 10.2 34.3 28.2 35l15.4.7c12.8.5 23.8 9.3 27.4 21.7l4.3 15c5 17.4 24 26.4 40.4 19.2l14.2-6.2c11.8-5.1 25.5-2.1 34 7.5l10.3 11.6c12 13.5 33 13.3 44.7-.3l10.1-11.8c8.4-9.7 22-13 33.9-8.1l14.3 5.9c16.6 6.9 35.4-2.4 40.2-19.9l4.1-15c3.4-12.4 14.3-21.3 27.1-22.1l15.4-.9c17.9-1 30.9-17.7 27.6-35.5l-2.8-15.3c-2.3-12.7 3.7-25.5 14.9-31.7l13.5-7.6c15.8-8.5 20.3-29.2 9.7-43.8zm-232 120.3c-82.4 0-149.2-67.3-149.2-150.3s66.8-150.4 149.2-150.4 149.2 67.3 149.2 150.3-66.8 150.4-149.2 150.4z" />
        <path d="M332.316 205.213l-55.8-4.1-21.1-52.2c-4-9.8-17.8-9.8-21.7 0l-21.1 52.2-55.8 4.1c-10.5.8-14.8 14-6.7 20.8l42.7 36.3-13.4 54.7c-2.5 10.3 8.6 18.5 17.6 12.9l47.5-29.7 47.5 29.7c8.9 5.6 20.1-2.6 17.6-12.9l-13.4-54.7 42.7-36.3c8.2-6.8 3.9-20-6.6-20.8z" />
      </svg>
      <span className="block">Best Seller</span>
    </div>
  )
}
