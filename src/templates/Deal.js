import React from "react"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
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

export default function Deal({ data }) {
  return (
    <>
      <Seo title="Deal Name" />
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
                    <ArrowLink
                      destination={`/shop/product/` + product.slug + `/`}
                      alkey={product.id}
                      text="See product"
                      className="block hover:text-black"
                    />
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

              <div className="flex flex-col space-y-2">
                <div id={product.slug}
                    className="relative">
                <AddToBasketOffer
                  category={data.deal.slug}
                  name={product.name}
                  price="6"
                  id={product.slug}
                />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>
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
