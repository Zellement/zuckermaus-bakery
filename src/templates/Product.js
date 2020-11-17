import React from "react"
import NumberFormat from "react-number-format"

export default function ProductPage({ data }) {
  return (
    <div>
      <h1 className="mt-40">{data.product.name}</h1>
      {data.product.orderDetails.map(orderDetail => (
        <><NumberFormat prefix={"£"} value={orderDetail.price} decimalScale={2} displayType={'text'} fixedDecimalScale={true} /></>
      ))}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      name
      description
      orderDetails {
        price
        volumeSize
      }
    }
  }
`
