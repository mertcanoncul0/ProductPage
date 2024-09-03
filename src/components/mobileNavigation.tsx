import { useEffect, useState } from "preact/hooks"
import { navigations } from "../constants"
import { MenuIcon } from "./menu-icon"

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

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)

  return (
    <>
      <MenuIcon onClick={toggleDrawer} />
      <div
        className={`header-nav__mobile-drawer${isDrawerOpen ? " show" : ""}`}
      >
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
