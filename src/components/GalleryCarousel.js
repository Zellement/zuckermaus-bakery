import React, { useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";
import { useEmblaCarousel } from "embla-carousel/react"
import { useStaticQuery, graphql } from "gatsby"
import { ArrowRight, ArrowLeft } from "./atoms/icons/Arrows"

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="absolute top-0 left-0 z-20 p-2 pr-4 -ml-6 text-2xl transition-all duration-300 bg-white cursor-pointer focus:outline-none focus:bg-red-500 group max-w-20 embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowLeft className="transition-all duration-300 transform group-hover:translate-x-2 group-focus:text-white" />
  </button>
)

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="absolute top-0 right-0 z-20 p-2 pr-4 -mr-6 text-2xl transition-all duration-300 bg-white cursor-pointer focus:outline-none focus:bg-red-500 group max-w-20 embla__button embla__button--next "
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowRight className="transition-all duration-300 transform group-hover:translate-x-2 group-focus:text-white" />
  </button>
)

export default function GalleryCarousel({ images }) {

  const fallbackImage = useStaticQuery(graphql`{
  file(relativePath: {eq: "no-image.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)

  const [viewportRef, embla] = useEmblaCarousel()
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  useEffect(() => {
    if (!embla) return
    embla.on("select", onSelect)
    onSelect()
  }, [embla, onSelect])

  if (images.length > 1) {
    return (
      <div className="relative embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div key={index} className=" embla__slide embla__slide--gallery">
                <GatsbyImage
                  image={image.gatsbyImageData}
                  backgroundColor="#F3B8D5"
                  key={index}
                  alt={image.alt}
                  className="block object-cover w-full h-full mb-px" />
                <span className="absolute bottom-0 right-0 z-20 p-2 text-sm bg-white font-display text-rose-pink">
                  {("0" + (index + 1)).slice(-2)}
                </span>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    );
  } else if (images.length === 1) {
    return <>
      <section initial="hidden" animate="visible">
        <div className="relative">
          <div className="max-w-full embla__container">
            {images.map((image, index) => (
              <div
                key={index}
                transition="easeInOut"
                className="block embla__slide embla__slide--gallery"
              >
                <GatsbyImage
                  image={image.gatsbyImageData}
                  backgroundColor="#F3B8D5"
                  key={index}
                  alt={image.alt ? image.alt : ""}
                  className="block w-full mb-px" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>;
  } else {
    return <>
      <section initial="hidden" animate="visible">
        <div className="relative">
          <div className="max-w-full embla__container">
            <div
              transition="easeInOut"
              className="block embla__slide embla__slide--gallery"
            >
              <GatsbyImage
                image={fallbackImage.file.childImageSharp.gatsbyImageData}
                backgroundColor="#26486E"
                alt="Image coming soon"
                className="block w-full h-auto mb-px" />
            </div>
          </div>
        </div>
      </section>
    </>;
  }
}

GalleryCarousel.propTypes = {
  images: PropTypes.array,
}

GalleryCarousel.defaultProps = {
  images: [],
}
