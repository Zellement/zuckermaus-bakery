import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import NumberFormat from "react-number-format"
import { MdAddShoppingCart } from "react-icons/md"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function ProductPage({ data }) {
  return (
    <>
      <SEO title={data.product.name} />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <motion.div className="content" variants={item} transition="easeInOut">
          <div>
            <Link to="/products/">Go back</Link>
            <h1 className="mt-40">{data.product.name}</h1>
            {data.product.orderDetails.map(orderDetail => (
              <div key={data.product.id}>
                <NumberFormat
                  prefix={"£"}
                  value={orderDetail.price}
                  decimalScale={2}
                  displayType={"text"}
                  fixedDecimalScale={true}
                />
                <button
                  key={orderDetail.id}
                  className="p-2 mr-4 bg-gray-300 Product__buy Product snipcart-add-item"
                  data-item-id={
                    data.product.name + " | " + orderDetail.volumeSize
                  }
                  data-item-price={orderDetail.price}
                  // data-item-image={product.gallery[0].fluid.url && product.gallery[0].fluid.url}
                  data-item-description={data.product.description}
                  data-item-name={
                    data.product.name + " | " + orderDetail.volumeSize
                  }
                  data-item-url={
                    `https://www.zuckermausbakery.com/products/` +
                    data.product.name +
                    "/"
                  }
                >
                  <MdAddShoppingCart className="inline text-4xl" /> Add to
                  basket
                </button>
              </div>
            ))}
          </div>

        </motion.div>
      </motion.section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      name
      id
      description
      orderDetails {
        price
        volumeSize
      }
    }
  }
`
