import { useCartStore } from "../hooks/useCartStore"
import { useAtom } from "jotai"
import { useProfileStore } from "../hooks/useProfileStore"
import { images } from "../constants"
import { formatCurrency } from "../lib/helper"

export function Cart() {
  const [{ cartOpen, cart }, setCart] = useAtom(useCartStore)
  const [_, setProfile] = useAtom(useProfileStore)

  const handleCartShow = () => {
    setProfile(false)
    setCart({ cartOpen: !cartOpen, cart })
  }

  const deleteProduct = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart({ cartOpen: false, cart: newCart })
  }

  return (
    <>
      <button
        className={`header-actions__cart${cartOpen ? " active" : ""}`}
        aria-label={`Cart with ${cart.length} items`}
        onClick={handleCartShow}
      >
        <span
          className={`header-actions__cart-count${
            cart.length > 0 ? " not-empty" : ""
          }`}
        >
          {cart.length}
        </span>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
      </button>

      <div
        className={`header-actions__cart-dropdown${cartOpen ? " show" : ""}`}
      >
        <div className="cart-dropdown__header">
          <h3 className="cart-dropdown__header-title">Cart</h3>
        </div>
        <div
          className={`cart-dropdown__main${cart.length === 0 ? " empty" : ""}`}
        >
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-dropdown__main-list">
                {cart.map((item, index) => (
                  <li key={index} className="cart-dropdown__main-list__item">
                    <img
                      src={images[item.image].thubnail}
                      alt={item.name}
                      className="cart-dropdown__main-list__item-image"
                    />
                    <div>
                      <h2 className="cart-dropdown__main-list__item-title">
                        {item.name}
                      </h2>
                      <p className="cart-dropdown__main-list__item-price">
                        {formatCurrency(item.price)} x {item.quantity}
                        <span>
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      </p>
                    </div>

                    <button
                      className="cart-dropdown__main-list__del-button"
                      aria-label="Delete product"
                      onClick={() => deleteProduct(item.id)}
                    >
                      <svg
                        width="14"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <path
                            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                            id="a"
                          />
                        </defs>
                        <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>

              <button
                className="cart-dropdown__main__button"
                aria-label="Checkout cart"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
