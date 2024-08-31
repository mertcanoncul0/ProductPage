import { useState } from "preact/hooks"
import { useCartStore } from "../hooks/useCartStore"
import { useAtom } from "jotai"
import { useGalleryStore } from "../hooks/useGalleryStore"
import { toast } from "sonner"

export function ProductDetail() {
  const [count, setCount] = useState(1)
  const [{ cart }, setCart] = useAtom(useCartStore)
  const [activeIndex] = useAtom(useGalleryStore)

  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => count > 1 && setCount(count - 1)

  const handleAddToCart = (id: number) => {
    const foundProduct = cart.find((item) => item.id === id)

    if (foundProduct) {
      const newCart = cart.map((item) => {
        if (item.id === id && item.quantity !== count) {
          toast.success("Product quantity updated")
          return { ...item, quantity: count }
        }

        toast.error("Product already in cart")

        return item
      })

      setCart((prev) => ({ ...prev, cart: newCart }))
      return
    }

    setCart((prev) => ({
      cartOpen: true,
      cart: [
        ...prev.cart,
        {
          id: 1,
          name: "Fall Limited Edition Sneakers",
          price: 125,
          quantity: count,
          image: activeIndex,
        },
      ],
    }))

    toast.success("Product added to cart")
  }

  return (
    <section className="main__image-product-detail">
      <h4 className="product-detail__brand">Sneaker Company</h4>
      <h1 className="product-detail__title">Fall Limited Edition Sneakers</h1>
      <p className="product-detail__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="product-detail__price">
        <div className="product-detail__price-wrapper">
          <p className="product-detail__price-title">$125.00</p>
          <p className="product-detail__price-title discount">$250.00</p>
        </div>
        <button
          className="product-detail__price-button"
          aria-label="Price button"
        >
          50%
        </button>
      </div>

      <div className="product-detail__bottom">
        <div className="product-detail__bottom-counter">
          <button
            className="minus"
            aria-label="Decrement count"
            onClick={handleDecrement}
          >
            <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </button>

          <p className="count">{count}</p>

          <button onClick={handleIncrement} aria-label="Increment count">
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
            </svg>
          </button>
        </div>
        <button
          className="product-detail__bottom-cart-btn"
          aria-label="Add to cart"
          onClick={() => handleAddToCart(1)}
        >
          <img src="/images/icon-cart.svg" alt="Add cart" />
          Add to cart
        </button>
      </div>
    </section>
  )
}
