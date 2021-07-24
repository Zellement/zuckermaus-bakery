import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { fade } from "../helpers/transitionHelper"
import Seo from "../components/Seo"
import GalleryCarousel from "../components/GalleryCarousel"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import { IconBestSeller } from "../components/atoms/icons/Trends"
import Hero from "../components/Hero"
import ProductDeal from "../components/ProductDeal"
import AddToBasket from "../components/atoms/AddToBasket"
import AustrianFlag from "../components/atoms/icons/AustrianFlag"
import ArrowLink from "../components/atoms/ArrowLink"

export default function DealsPage({ data, pageContext }) {
  const products = data.allDatoCmsProduct

  return (
    <>
      <Seo title={pageContext.title ? `${pageContext.title} | Shop` : `Shop`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero className="" header="Shop" subpage={pageContext.title} />

        <motion.section
          variants={fade}
          transition="easeInOut"
          className="container grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {products.edges.map(({ node: product }) => (
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

                    <ProductDeal deals={ product.deal } />

                    <ArrowLink
                      destination={`/shop/product/` + product.slug + `/`}
                      alkey={product.id}
                      text="See product"
                      className="block hover:text-black mr-auto"
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


              { data.datoCmsGlobal.closeTheShop ? 
              <div className="bg-gray-100 flex flex-col space-y-2 p-4 text-sm">
                <p className="font-semibold">{data.datoCmsGlobal.closedProductButtonMessage}</p>
                <p className="text-xs">Re-Opening: {data.datoCmsGlobal.dateReOpening}</p>
                <p className="text-xs">Check back soon!</p>
              </div>
              : 
              <div className="flex flex-col space-y-2">
                {product.orderDetails.map((orderDetail, index) => (
                  <div
                    key={orderDetail.id}
                    className="relative"
                    id={orderDetail.id}
                  >
                    <AddToBasket
                      price={orderDetail.price}
                      name={product.name}
                      description={product.description}
                      id={orderDetail.id}
                      volumeSize={orderDetail.volumeSize}
                      slug={product.slug}
                      shopClosed={data.datoCmsGlobal.closeTheShop}
                      closedMessage={data.datoCmsGlobal.closedProductButtonMessage}
                      closedReOpening={data.datoCmsGlobal.dateReOpening}
                    />
                  </div>
                ))}
              </div>
              }
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    datoCmsGlobal {
      closeTheShop
      dateReOpening(formatString: "DD/MM/Y")
      closedProductButtonMessage
    }
    allDatoCmsProduct(
      sort: { fields: name, order: ASC }
      filter: { productCategory: { slug: { eq: $slug } } }
    ) {
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
