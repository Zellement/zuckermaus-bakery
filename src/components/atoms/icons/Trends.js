import React from "react"

export function IconBestSeller({ className }) {
  return (
    <div
      className={
        className +
        " flex flex-row items-center p-2 text-sm text-center font-display space-x-2"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 508 508"
        width="35"
        height="35"
      >
        <defs />
        <circle cx="254" cy="254" r="254" fill="#ffd05b" />
        <path
          fill="#ff7058"
          d="M339.6 161.6c.8 15.6-6.8 31.2-17.6 47.6 8.8-53.2-8.8-112.8-79.6-140.4 6 22.4-8.4 50-22.4 80-8.4-9.6-18-18.8-29.6-27.6 5.6 74.4-157.6 148.8-25.2 276 0 0 8.8 5.6 24.4 11.2l-1.2-1.2c-28.4-30.8-44-94.4 10-136.4-.8 10.4 4.4 20.4 11.6 30.8-5.6-34.4 5.6-73.2 51.6-91.2-4 14.4 5.6 32.4 14.4 52 5.2-6.4 11.6-12.4 19.2-18-2.8 39.6 70.8 80.4 44.4 140.8 5.2-4 10.4-8.4 15.2-13.6 43.6-47.2 67.6-145.2-15.2-210z"
        />
      </svg>
      <span className="block">Top Selling</span>
    </div>
  )
}