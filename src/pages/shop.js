import React from "react"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import GalleryCarousel from "../components/GalleryCarousel"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import IconBestSeller from "../components/atoms/icons/BestSeller"
import IconFeaturedProduct from "../components/atoms/icons/FeaturedProduct"
import NumberFormat from "react-number-format"
import CategoryFilter from "../components/category-filter"
import { FaShoppingBasket } from "react-icons/fa"

const duration = 0.2

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
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}
const item__product = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function ShopPage({ data }) {
  const products = data.allDatoCmsProduct
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="container p-8 lg:pt-56"
      >
        <motion.div className="content" variants={item} transition="easeInOut">
          <CategoryFilter />

          <div className="flex flex-row pt-8 my-8 text-xs border-t border-gray-100">
            <span className="mr-4">
              <IconVegetarian /> Vegetarian
            </span>
            <span className="mr-4">
              <IconVegan /> Vegan
            </span>
            <span className="mr-4">
              <IconGlutenFree /> Gluten Free
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={item}
          transition="easeInOut"
        >
          {products.edges.map(({ node: product }, index) => (
            <motion.div
              variants={item__product}
              transition="easeInOut"
              key={product.id}
              className="relative p-5 bg-gray-100"
            >
              {product.bestSeller ? <IconBestSeller /> : null}
              {product.featuredProduct ? <IconFeaturedProduct /> : null}

              <Link
                to={`/product/` + product.slug + `/`}
                key={product.id}
                className="max-w-sm py-8 my-8"
              >
                <h2>
                  {product.name}
                  {product.vegetarian ? <IconVegetarian /> : null}
                  {product.vegan ? <IconVegan /> : null}
                  {product.glutenFree ? <IconGlutenFree /> : null}
                </h2>
              </Link>

              <GalleryCarousel images={product.gallery} />

              <p>{product.description}</p>

              {product.orderDetails.map((orderDetail) => (
                <div key={orderDetail.id} className="mt-2">
                  <button
                    key={orderDetail.id}
                    className="flex flex-col items-center w-full p-4 text-white transition duration-300 Product__buy Product snipcart-add-item bg-red hover:bg-sugar-pink hover:text-sugar-pink-900"
                    data-item-id={product.name + " | " + orderDetail.volumeSize}
                    data-item-price={orderDetail.price}
                    // data-item-image={product.gallery[0].fluid.url && product.gallery[0].fluid.url}
                    data-item-description={product.description}
                    data-item-name={
                      product.name + " | " + orderDetail.volumeSize
                    }
                    data-item-url={
                      `https://www.zuckermausbakery.com/products/` +
                      product.name +
                      "/"
                    }
                  >
                    <span className="w-full mb-2 font-bold">
                      {orderDetail.volumeSize}
                    </span>

                    <span className="flex flex-row justify-between w-full">
                      <NumberFormat
                        prefix={"£"}
                        value={orderDetail.price}
                        decimalScale={2}
                        displayType={"text"}
                        fixedDecimalScale={true}
                      />
                      {/* <GrFormAdd className="inline-block text-white fill-current" /> */}
                      <span className="flex flex-row items-center">
                        <FaShoppingBasket className="inline-block mr-2 -mt-1" />
                        <span>Add to basket</span>
                      </span>
                    </span>
                  </button>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    allDatoCmsProduct(
      sort: { fields: name, order: ASC }
      filter: { productCategory: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          id
          name
          slug
          description
          ingredients
          vegan
          vegetarian
          bestSeller
          glutenFree
          featuredProduct
          orderDetails {
            price
            volumeSize
            id
          }
          gallery {
            fluid(imgixParams: { w: "400", h: "400", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
