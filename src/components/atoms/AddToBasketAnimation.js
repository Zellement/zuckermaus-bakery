export default function AddToBasketAnimation(divId) {
  /* ----------------------------------------------
  Product animation
  ---------------------------------------------- */

  // create a new div element
  const newProductDiv = document.createElement("div")

  // Add some classes to that div
  newProductDiv.classList.add(
    "absolute",
    "top-0",
    "right-0",
    "rounded",
    "bg-white",
    "text-green-500",
    "p-1",
    "font-bold",
    "mt-1",
    "mr-1",
    "checkmarkIcon"
  )

  // and give it some content
  const newProductDivContent = document.createTextNode("Added!")

  // add the text node to the newly created div
  newProductDiv.appendChild(newProductDivContent)

  // add the newly created element and its content into the DOM
  const productDiv = document.getElementById(divId)

  // Place that div in the relevant ID div
  productDiv.appendChild(newProductDiv)

  /* ----------------------------------------------
  Basket animation
  ---------------------------------------------- */

  // create a new div element
  const newBasketDiv = document.createElement("div")

  // Add some classes to that div
  newBasketDiv.classList.add(
    "absolute",
    "left-0",
    "-ml-6",
    "text-lg",
    "fill-current",
    "top-0",
    "z-30",
    "checkmarkIcon",
    "w-5",
    "mt-2",
    "h-5",
    "text-yellow-500"
  )

  // and give it some content
  // const newBasketDivContent = document.createTextNode("Added!")

  // add the text node to the newly created div
  newBasketDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.867 55.867" className="text-yellow-500 fill-current"><defs/><path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"/></svg>';

  // add the newly created element and its content into the DOM
  const basketDiv = document.getElementById("basket")

  // Place that div in the relevant ID div
  basketDiv.appendChild(newBasketDiv)
}
