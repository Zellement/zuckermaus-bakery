import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import GalleryCarousel from "../components/GalleryCarousel"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import IconBestSeller from "../components/atoms/icons/BestSeller"
import NumberFormat from "react-number-format"
import Hero from "../components/Hero"
import CategoryFilter from "../components/CategoryFilter"
import IconCheckmark from "../components/atoms/IconCheckmark"
import { FaShoppingBasket } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { container } from "../helpers/transitionHelper"


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

export default function ShopPage({ data, pageContext }) {
  const products = data.allDatoCmsProduct

  return (
    <>
      <SEO title={pageContext.title ? `${pageContext.title} | Shop` : `Shop`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero
          header="Shop"
          subheader="A little slice of Austria."
          subpage={pageContext.title}
        />

        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <motion.div
            className="mt-12 content"
            variants={item}
            transition="easeInOut"
          >
            <CategoryFilter className="flex flex-row flex-wrap p-8 text-xs md:text-sm md:space-x-2 lg:w-full xl:justify-between lg:text-base" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3"
            variants={item}
            transition="easeInOut"
          >
            {products.edges.map(({ node: product }) => (
              <motion.div
                variants={item__product}
                transition="easeInOut"
                key={product.id}
                className="relative"
              >
                <Link
                  to={`/shop/product/` + product.slug + `/`}
                  key={product.id}
                  className="block max-w-sm px-8 hover:text-rose-pink focus:text-rose-pink"
                >
                  <h2 className="text-lg">{product.name}</h2>
                </Link>

                <div className="relative m-8">
                  {product.bestSeller ? <IconBestSeller /> : null}

                  <GalleryCarousel
                    linkTo={`/shop/product/` + product.slug + `/`}
                    images={product.gallery}
                  />
                </div>

                <div className="p-8 pt-16 pb-16 -mt-16 bg-sugar-pink-300">
                  <div className="flex flex-row">
                    <div className="w-3/4">
                      <p className="font-display-first-line text-rose-pink-900">
                        {product.description}
                      </p>
                      <Link
                        to={`/shop/product/` + product.slug + `/`}
                        key={product.id}
                        className="inline-flex items-center mt-2 text-xs text-rose-pink hover:text-rose-pink-700 focus:text-rose-pink-700 group"
                      >
                        <span className="inline-block">See product</span>
                        <BsArrowRight className="inline-block ml-1 transition duration-300 transform group-hover:translate-x-4" />
                      </Link>
                    </div>

                    <div className="flex flex-row justify-end w-1/4 my-auto space-x-2">
                      {product.vegetarian ? (
                        <IconVegetarian className="w-6 h-6" />
                      ) : null}
                      {product.vegan ? <IconVegan className="w-6 h-6" /> : null}
                      {product.glutenFree ? (
                        <IconGlutenFree className="w-6 h-6" />
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="px-8 -mt-8">
                  {product.orderDetails.map((orderDetail, index) => (
                    <div
                      key={orderDetail.id}
                      className="relative"
                      id={orderDetail.id}
                    >
                      <button
                        // https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
                        onClick={() => {
                          IconCheckmark(orderDetail.id)
                        }}
                        className="relative flex flex-col items-center w-full p-4 text-white transition duration-300 border Product__buy Product snipcart-add-item bg-red hover:bg-sugar-pink hover:text-sugar-pink-900 focus:border-red-800 focus:outline-none"
                        data-item-id={
                          product.name + " | " + orderDetail.volumeSize
                        }
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
                          <span className="flex flex-row items-center">
                            <FaShoppingBasket className="inline-block mr-2 -mt-1" />
                            <span>Add to basket</span>
                          </span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
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
