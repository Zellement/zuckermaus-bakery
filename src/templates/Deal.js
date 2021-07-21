import React, { useState } from "react"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import AddToBasketAnimation from "../components/atoms/AddToBasketAnimation"
import { FaShoppingBasket } from "react-icons/fa"
import { fade } from "../helpers/transitionHelper"
import GalleryCarousel from "../components/GalleryCarousel"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import { IconBestSeller } from "../components/atoms/icons/Trends"
import ProductDeal from "../components/ProductDeal"
import AddToBasketOffer from "../components/atoms/AddToBasketOffer"
import AustrianFlag from "../components/atoms/icons/AustrianFlag"
import ArrowLink from "../components/atoms/ArrowLink"
import { FiPlusCircle } from "react-icons/fi"

export default function Deal({ data }) {

  // const [ availableDealProducts, setAvailableDealProducts] = useState([])

  let availableDealProducts = "Choose Product..."

  {console.log(data.products.edges.length)}

  {data.products.edges.map(({ node: product, i }) => (
    <>
      { availableDealProducts += "|" + product.name }
    </>
  ))}

  console.log(availableDealProducts)

  return (
    <>
      <Seo title={data.deal.dealName} />
      <motion.div
        initial="initial"
        className="overflow-hidden"
        animate="enter"
        exit="exit"
      >
        <Hero
          className="border-b-2"
          subpage={data.deal.dealName}
          header={"Deals"}
          introduction={data.deal.description}
          backText={"See all Deals"}
          backDestination={"/deals/"}
        />
        <motion.div
          variants={fade}
          transition="easeInOut"
          className="flex flex-col gap-8 p-4 mt-8"
        >
            <div
              id={data.deal.slug}
              className={
                "relative mx-auto mb-6"
              }
            >

              <button
                className="w-auto relative inline-flex flex-col p-4 text-base font-bold text-left text-red-500 transition duration-300 bg-red-100 Product__buy Product snipcart-checkout snipcart-add-item hover:bg-red-500 hover:text-red-100 focus:bg-red-500 focus:text-red-100 focus:outline-none"
                data-item-id={data.deal.dealName}
                data-item-price={data.deal.price}
                data-item-name={data.deal.dealName}
                data-item-custom1-name="Single serving of product 1..."
                data-item-custom1-options={availableDealProducts}
                data-item-custom2-name="Single serving of product 2..."
                data-item-custom2-options={availableDealProducts}
                data-item-custom3-name="Single serving of product 3..."
                data-item-custom3-options={availableDealProducts}
                data-item-url={
                  "https://zuckermaus-bakery.netlify.app/deals/" +
                  data.deal.slug +
                  "/"
                }
                onClick={() => {
                  AddToBasketAnimation(data.deal.slug)
                }}
              >
                <span className="flex flex-row justify-between w-full">
                  <span className="flex flex-row items-center">
                    <FaShoppingBasket className="inline-block mr-2 -mt-1" />
                    <div className="flex flex-col">
                      <span>Add deal to basket</span>
                      <span className="text-xs">You can customise this in the cart</span>
                    </div>
                  </span>
                </span>
              </button>
              </div>

           <motion.section
              variants={fade}
              transition="easeInOut"
              className="container grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
            >
          {data.products.edges.map(({ node: product }) => (
            <motion.div
              variants={fade}
              transition="easeInOut"
              key={product.id}
              className="relative p-8 bg-white border border-gray-100"
            >
              <div className="relative">
                <div className="absolute bottom-0 left-0 z-30 bg-white text-red">
                  {product.bestSeller ? <IconBestSeller className="" /> : null}
                </div>

                <GalleryCarousel
                  linkTo={`/shop/product/` + product.slug + `/`}
                  images={product.gallery}
                />
              </div>

              <div className="mt-8">
                <Link
                  to={`/shop/product/` + product.slug + `/`}
                  key={product.id}
                  className="block max-w-sm group"
                >
                  <h2 className="m-0 mb-2 font-sans text-lg font-bold transition duration-300 group-hover:text-rose-pink-900 text-sugar-pink-900 lg:text-xl">
                    {product.name}
                  </h2>
                  {product.secondaryName ? (
                    <h3 className="flex flex-row items-center mb-4 space-x-2 font-sans font-bold text-red-500 transition duration-300 group-hover:text-rose-pink-900 lg:text-lg">
                      <AustrianFlag className="w-6" />{" "}
                      <span>{product.secondaryName}</span>
                    </h3>
                  ) : null}
                </Link>
                <div className="flex flex-row my-4 text-sugar-pink-800">
                  <div className="flex flex-col w-3/4 gap-2">
                    <p className="text-rose-pink-900 xl:text-base">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-row justify-end w-1/4 my-4 space-x-2">
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

            </motion.div>
          ))}
          </motion.section>
        </motion.div>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    deal: datoCmsDeal(slug: { eq: $slug }) {
      dealName
      description
      slug
      price
      id
    }
    products: allDatoCmsProduct(filter: { deal: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          name
          secondaryName
          slug
          description
          ingredients
          vegan
          vegetarian
          bestSeller
          glutenFree
          deal {
            id
            slug
            dealName
          }
          orderDetails {
            price
            volumeSize
            id
          }
          gallery {
            gatsbyImageData(
              layout: CONSTRAINED
              imgixParams: { w: "400", h: "400", fit: "crop", ar: "1:1" }
            )
            alt
          }
        }
      }
    }
  }
`
