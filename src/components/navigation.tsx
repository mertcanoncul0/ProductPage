import { navigations } from "../constants"

export function Navigation() {
  return (
    <ul className="header-nav__list">
      {navigations.map((navigation) => (
        <li className="header-nav__item" key={navigation.link}>
          <a href={navigation.link} className="header-nav__link">
            {navigation.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
