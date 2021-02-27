import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import GalleryCarousel from "../components/GalleryCarousel"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import IconBestSeller from "../components/atoms/icons/BestSeller"
import Hero from "../components/Hero"
import CategoryFilter from "../components/CategoryFilter"
import { BsArrowRight } from "react-icons/bs"
import { container } from "../helpers/transitionHelper"
import AddToBasket from "../components/atoms/AddToBasket"

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
                  <h2 className="text-lg text-red-500 lg:text-xl">{product.name}</h2>
                </Link>

                <div className="relative m-8">
                  {product.bestSeller ? <IconBestSeller className="absolute bottom-0 left-0 bg-white text-red z-30 " /> : null}

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

                      <AddToBasket price={orderDetail.price} name={product.name} description={product.description} id={orderDetail.id} volumeSize={orderDetail.volumeSize} />

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
