import { useAtom } from "jotai"
import { images } from "../constants"
import { useGalleryStore } from "../hooks/useGalleryStore"
import { useLightboxStore } from "../hooks/useLightboxStore"

export function ImageGallery() {
  const [activeIndex, setActiveIndex] = useAtom(useGalleryStore)
  const [_, setLightboxOpen] = useAtom(useLightboxStore)

  const handleLightboxOpen = () => setLightboxOpen(true)

  const handleNextIndex = () => {
    if (activeIndex === images.length - 1) return setActiveIndex(0)

    setActiveIndex(activeIndex + 1)
  }

  const handlePrevIndex = () => {
    if (activeIndex === 0) return setActiveIndex(images.length - 1)

    setActiveIndex(activeIndex - 1)
  }

  return (
    <div className="main__image-gallery">
      <figure className="image-gallery__img" onClick={handleLightboxOpen}>
        <img src={images[activeIndex].src} alt={images[activeIndex].alt} />

        <div className="image-gallery__img-index-btns">
          <button
            className="image-gallery__next-button"
            aria-label={`Next ${activeIndex + 1} image `}
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

          <button
            className="image-gallery__prev-button"
            aria-label={`Previous ${activeIndex + 1} image `}
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
        </div>
      </figure>

      <ul className="image-gallery__list">
        {images.map((image, index) => (
          <li
            className={`image-gallery__item${
              index === activeIndex ? " active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.thubnail} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}
