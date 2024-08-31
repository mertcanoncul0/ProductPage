import { useEffect, useState } from "preact/hooks"
import { navigations } from "../constants"

export function MobileNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"
    }

    const handleOutClick = (e: Event) => {
      const target = e.target as HTMLElement

      if (
        target.contains(
          document.querySelector(".header-nav__mobile-drawer-overlay")
        )
      ) {
        setIsDrawerOpen(false)
      }
    }

    addEventListener("click", handleOutClick)
    return () => {
      document.body.style.overflow = "auto"
      removeEventListener("click", handleOutClick)
    }
  }, [isDrawerOpen])

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <>
      <button className="header-nav__mobile-menu-btn" onClick={openDrawer}>
        <img src="/images/icon-menu.svg" alt="" />
      </button>
      <div
        className={`header-nav__mobile-drawer${isDrawerOpen ? " show" : ""}`}
      >
        <button className="mobile-drawer__close-btn" onClick={closeDrawer}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              stroke="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <ul className="mobile-drawer__list">
          {navigations.map((nav) => (
            <li className="mobile-drawer__item" key={nav.link}>
              <a href={nav.link} className="mobile-drawer__link">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`header-nav__mobile-drawer-overlay${
          isDrawerOpen ? " show" : ""
        }`}
      ></div>
    </>
  )
}
