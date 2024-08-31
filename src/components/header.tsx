import { Cart } from "./cart"
import { Logo } from "./logo"
import { MobileNavigation } from "./mobileNavigation"
import { Navigation } from "./navigation"
import { Profile } from "./profile"

export function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <MobileNavigation />
        <Logo />
        <Navigation />
      </nav>
      <div className="header-actions">
        <Cart />
        <Profile />
      </div>
    </header>
  )
}
