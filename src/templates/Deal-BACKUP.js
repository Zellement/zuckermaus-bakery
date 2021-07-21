// import React, { useState } from "react"
// import Seo from "../components/Seo"
// import Hero from "../components/Hero"
// import { motion } from "framer-motion"
// import { graphql, Link } from "gatsby"
// import AddToBasketAnimation from "../components/atoms/AddToBasketAnimation"
// import { FaShoppingBasket } from "react-icons/fa"
// import { fade } from "../helpers/transitionHelper"
// import GalleryCarousel from "../components/GalleryCarousel"
// import IconVegetarian from "../components/atoms/icons/Vegetarian"
// import IconVegan from "../components/atoms/icons/Vegan"
// import IconGlutenFree from "../components/atoms/icons/GlutenFree"
// import { IconBestSeller } from "../components/atoms/icons/Trends"
// import ProductDeal from "../components/ProductDeal"
// import AddToBasketOffer from "../components/atoms/AddToBasketOffer"
// import AustrianFlag from "../components/atoms/icons/AustrianFlag"
// import ArrowLink from "../components/atoms/ArrowLink"
// import { FiPlusCircle } from "react-icons/fi"

// export default function Deal({ data }) {
//   const [dealBag, setDealBag] = useState([])

//   const handleDealBag = (item) => {
//     if (dealBag.length < 3) {
//       setDealBag([...dealBag, " " + item])
//     }
//   }

//   const [finalDealBag, setFinalDealBag] = useState([])

//   const handleFinalDealBag = (items) => {
//     setFinalDealBag([...finalDealBag, " " + items])
//   }

//   return (
//     <>
//       <Seo title={data.deal.dealName} />
//       <motion.div
//         initial="initial"
//         className="overflow-hidden"
//         animate="enter"
//         exit="exit"
//       >
//         <Hero
//           className="border-b-2"
//           subpage={data.deal.dealName}
//           header={"Deals"}
//           introduction={data.deal.description}
//           backText={"See all Deals"}
//           backDestination={"/deals/"}
//         />
//         <motion.div
//           variants={fade}
//           transition="easeInOut"
//           className="flex flex-col gap-8 p-4 mt-8 md:flex-row"
//         >
//           <div className="w-full p-8 md:w-1/3 md:order-last bg-rose-pink-100">
//             <h3>Deal Bag</h3>
//             {/* 
//             <button
//               className="p-2 mb-8 text-xs text-white bg-rose-pink-500"
//               onClick={() => setFinalDealBag([])}
//             >
//               Clear final bag
//             </button> */}

//             {/* {finalDealBag.length != 0 ? (
//               <>
//                 <button
//                   className="p-2 mb-8 text-xs text-white bg-rose-pink-500"
//                   onClick={() => setFinalDealBag([])}
//                 >
//                   Clear deal bag summary
//                 </button>
//                   <p className="text-xs uppercase">Deal bag summary</p>
//                   <div className="p-2 bg-white text-2xs">{finalDealBag}</div>
//               </>
//             ) : null} */}

//             {dealBag.length != 0 ? (
//               <>
//                 <button
//                   className="p-2 mb-8 text-xs text-white bg-rose-pink-500"
//                   onClick={() => setDealBag([])}
//                 >
//                   Clear deal bag
//                 </button>
//                 <ol class="list-decimal pl-8 flex flex-col gap-2">
//                   {dealBag.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ol>
//               </>
//             ) : (
//               <p>Add some items to your deal bag</p>
//             )}
//             <div
//               id={data.deal.slug}
//               className={
//                 "relative mt-8 " +
//                 (dealBag.length == 3
//                   ? "opacity-100"
//                   : "opacity-20 pointer-events-none")
//               }
//             >
//               {/* {dealBag.length == 3 ? 
//               <AddToBasketOffer
              
//                 name={data.deal.dealName}
//                 description={dealBag}
//                 price={data.deal.price}
//                 id={data.deal.slug}
//                />
//                : null } */}
//               <button
//                 className="relative flex flex-col w-full p-4 text-base font-bold text-left text-red-500 transition duration-300 bg-red-100 Product__buy Product snipcart-add-item hover:bg-red-500 hover:text-red-100 focus:bg-red-500 focus:text-red-100 focus:outline-none"
//                 data-item-id={data.deal.dealName}
//                 data-item-price={data.deal.price}
//                 data-item-description={finalDealBag}
//                 data-item-name={data.deal.dealName}
//                 data-item-custom1-name="Size"
//                 data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
//                 data-item-url={
//                   "https://www.zuckermausbakery.com/deals/" +
//                   data.deal.slug +
//                   "/"
//                 }
//                 onClick={() => {
//                   AddToBasketAnimation(data.deal.slug)
//                   handleFinalDealBag(dealBag)
//                   setDealBag([])
//                 }}
//               >
//                 <span className="flex flex-row justify-between w-full">
//                   <span className="flex flex-row items-center">
//                     <FaShoppingBasket className="inline-block mr-2 -mt-1" />
//                     <span>Add deal bag to basket</span>
//                   </span>
//                 </span>
//               </button>
//             </div>
//           </div>

//           <motion.section
//             variants={fade}
//             transition="easeInOut"
//             className={
//               "container grid w-full grid-cols-1 gap-10 md:w-2/3 md:grid-cols-2 xl:grid-cols-3"
//             }
//           >
//             {data.products.edges.map(({ node: product }) => (
//               <div
//                 variants={fade}
//                 transition="easeInOut"
//                 key={product.id}
//                 className={
//                   "relative p-4 bg-white border border-gray-100 transition duration-300 " +
//                   (dealBag.length == 3 ? "opacity-20" : null)
//                 }
//               >
//                 <Link
//                   to={`/shop/product/` + product.slug + `/`}
//                   key={product.id}
//                   className="block max-w-sm group"
//                 >
//                   <h2 className="m-0 mb-2 font-sans text-base font-bold transition duration-300 group-hover:text-rose-pink-900 text-sugar-pink-900">
//                     {product.name}
//                   </h2>
//                   {product.secondaryName ? (
//                     <h3 className="flex flex-row items-center mb-4 space-x-2 font-sans text-sm font-bold text-red-500 transition duration-300 group-hover:text-rose-pink-900 ">
//                       <AustrianFlag className="w-6" />{" "}
//                       <span>{product.secondaryName}</span>
//                     </h3>
//                   ) : null}
//                 </Link>

//                 <button
//                   onClick={() => handleDealBag(product.name + " (Single)")}
//                   className="flex flex-row items-center gap-2 p-2 text-xs bg-rose-pink-100"
//                 >
//                   <FiPlusCircle className="-mt-px" />{" "}
//                   <span>Add to deal bag</span>
//                 </button>

//                 {/* <div className="flex flex-col space-y-2">
//                 <div id={product.slug}
//                     className="relative">
//                 <AddToBasketOffer
//                   category={data.deal.slug}
//                   name={product.name}
//                   price="6"
//                   id={product.slug}
//                 />
//                 </div>
//               </div> */}
//               </div>
//             ))}
//           </motion.section>
//         </motion.div>
//       </motion.div>
//     </>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     deal: datoCmsDeal(slug: { eq: $slug }) {
//       dealName
//       description
//       slug
//       price
//       id
//     }
//     products: allDatoCmsProduct(filter: { deal: { slug: { eq: $slug } } }) {
//       edges {
//         node {
//           id
//           name
//           secondaryName
//           slug
//           description
//           ingredients
//           vegan
//           vegetarian
//           bestSeller
//           glutenFree
//           deal {
//             id
//             slug
//             dealName
//           }
//           orderDetails {
//             price
//             volumeSize
//             id
//           }
//           gallery {
//             gatsbyImageData(
//               layout: CONSTRAINED
//               imgixParams: { w: "400", h: "400", fit: "crop", ar: "1:1" }
//             )
//             alt
//           }
//         }
//       }
//     }
//   }
// `
