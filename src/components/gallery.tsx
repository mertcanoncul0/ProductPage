import { useAtom } from "jotai"
import { images } from "../constants"
import { useGalleryStore } from "../hooks/useGalleryStore"
import { useLightboxStore } from "../hooks/useLightboxStore"

export function ImageGallery() {
  const [activeIndex, setActiveIndex] = useAtom(useGalleryStore)
  const [_, setLightboxOpen] = useAtom(useLightboxStore)

  const handleLightboxOpen = () => setLightboxOpen(true)

  return (
    <section className="main__image-gallery">
      <figure className="image-gallery__img" onClick={handleLightboxOpen}>
        <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
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
    </section>
  )
}
