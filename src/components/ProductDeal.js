import { Link } from "gatsby"
import React from "react"
import { FaStar } from "react-icons/fa"

export default function ProductDeal({ deals }) {
  if (deals) {
    return (
      <Link className="inline-flex items-center self-start gap-2 p-2 my-2 mr-auto text-xs text-white bg-red-500 hover:bg-rose-pink-500" to={"/deals/" + deals.slug}>
        <FaStar className="-mt-px" /> <span>{deals.dealName}</span>
      </Link>
    )
  } else {
    return null
  }
}
