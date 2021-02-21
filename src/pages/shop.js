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
import CategoryFilter from "../components/CategoryFilter"
import { FaShoppingBasket } from "react-icons/fa"
import { hero, hero__header, hero__subline } from "../helpers/transitionHelper"

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
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

function iconCheckmark(divId) {
  // create a new div element
  const newDiv = document.createElement("div")

  // Add some classes to that div
  newDiv.classList.add(
    "absolute",
    "top-0",
    "right-0",
    "rounded",
    "bg-white",
    "text-green-500",
    "p-1",
    "text-2xs",
    "font-bold",
    "mt-1",
    "mr-1",
    "checkmarkIcon"
  )

  // and give it some content
  const newContent = document.createTextNode("Added!")

  // add the text node to the newly created div
  newDiv.appendChild(newContent)

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById(divId)

  // Place that div in the relevant ID div
  currentDiv.appendChild(newDiv)
}

export default function ShopPage({ data, pageContext }) {
  const products = data.allDatoCmsProduct

  console.log(pageContext)

  return (
    <>
      <SEO title={pageContext.title ? `${pageContext.title} | Shop` : `Shop`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div variants={hero} className="relative z-10 bg-red-500">
          <div className="container relative h-20 px-8 md:h-32 lg:h32 2xl:h-48">
            <motion.h1
              variants={hero__header}
              className="absolute bottom-0 left-0 ml-8 pointer-events-none -mb-5 text-5xl font-light text-sugar-pink font-display md:text-8xl md:-mb-8 lg:text-10xl lg:-mb-11 2xl:text-15xl 2xl:-mb-17"
            >
              Shop
              {pageContext.title ? <span className="text-white text-lg md:text-xl lg:text-2xl 2xl:text-4xl 2xl:-ml-40 -ml-28">{pageContext.title}</span> : null }
            </motion.h1>

            <motion.span
              variants={hero__subline}
              className="absolute bottom-0 right-0 mr-8 -mb-4 pointer-events-none text-sm font-light leading-none text-red-500 font-display md:text-xl md:-mb-6 lg:-mb-8 lg:text-3xl 2xl:text-4xl 2xl:-mb-11"
            >
              A little slice of Austria.
            </motion.span>
          </div>
        </motion.div>

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
            <CategoryFilter className="flex flex-row flex-wrap p-8 text-xs md:text-sm md:space-x-2 lg:w-full lg:justify-between lg:text-base" />
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

                <div className="p-8 pt-16 pb-16 -mt-16 bg-sugar-pink-400">
                  <div className="flex flex-row">
                    <p className="w-3/4 font-display-first-line text-rose-pink-900">
                      {product.description}
                    </p>

                    <div className="flex flex-row w-1/4 my-auto">
                      {product.vegetarian ? <IconVegetarian /> : null}
                      {product.vegan ? <IconVegan /> : null}
                      {product.glutenFree ? <IconGlutenFree /> : null}
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
                          iconCheckmark(orderDetail.id)
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
