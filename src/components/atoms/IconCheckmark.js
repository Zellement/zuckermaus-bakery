export default function iconCheckmark(divId) {
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