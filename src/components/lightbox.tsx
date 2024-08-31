import { useAtom } from "jotai"
import { images } from "../constants"
import { useGalleryStore } from "../hooks/useGalleryStore"
import { useLightboxStore } from "../hooks/useLightboxStore"
import { useEffect, useState } from "preact/hooks"

export function Lightbox() {
  const [activeIndex] = useAtom(useGalleryStore)
  const [lightboxOpen, setLightboxOpen] = useAtom(useLightboxStore)
  const [lightboxIndex, setLightboxIndex] = useState(activeIndex)

  useEffect(() => {
    setLightboxIndex(activeIndex)

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement

      if (target.contains(document.querySelector(".main__lightbox-overlay"))) {
        setLightboxOpen(false)
      }
    }

    addEventListener("click", handleClick)
    return () => removeEventListener("click", handleClick)
  }, [activeIndex])

  const handleLightboxClose = () => setLightboxOpen(false)

  const handleNextIndex = () => {
    if (lightboxIndex === images.length - 1) return setLightboxIndex(0)

    setLightboxIndex(lightboxIndex + 1)
  }

  const handlePrevIndex = () => {
    if (lightboxIndex === 0) return setLightboxIndex(images.length - 1)

    setLightboxIndex(lightboxIndex - 1)
  }

  return (
    <>
      <div className={`main__lightbox${lightboxOpen ? " show" : ""}`}>
        <figure className="image-gallery__img">
          <button
            className="main__lightbox-close"
            onClick={handleLightboxClose}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <button
            className="image-gallery__prev-button"
            onClick={handlePrevIndex}
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
          />

          <button
            className="image-gallery__next-button"
            onClick={handleNextIndex}
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </figure>

        <ul className="image-gallery__list">
          {images.map((image, index) => (
            <li
              className={`image-gallery__item${
                index === lightboxIndex ? " active" : ""
              }`}
              onClick={() => setLightboxIndex(index)}
            >
              <img src={image.thubnail} alt={image.alt} />
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`main__lightbox-overlay${lightboxOpen ? " show" : ""}`}
      ></div>
    </>
  )
}
