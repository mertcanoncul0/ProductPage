import { useAtom } from "jotai"
import { useProfileStore } from "../hooks/useProfileStore"
import { useCartStore } from "../hooks/useCartStore"

export function Profile() {
  const [profile, setProfile] = useAtom(useProfileStore)
  const [{ cart }, setCart] = useAtom(useCartStore)

  const handleProfileState = () => {
    setCart({ cartOpen: false, cart })
    setProfile((prev) => !prev)
  }

  return (
    <>
      <button
        className={`header-actions__profile${profile ? " active" : ""}`}
        onClick={handleProfileState}
      >
        <img src="/images/image-avatar.png" alt="profile icon" />
      </button>

      <div
        className={`header-actions__profile-dropdown${profile ? " show" : ""}`}
      >
        <ul className="profile-dropdown__list">
          <li className="profile-dropdown__item">
            <a href="#/profile">Profile</a>
          </li>
          <li className="profile-dropdown__item">
            <a href="#/orders">Orders</a>
          </li>
          <li className="profile-dropdown__item">
            <a href="#/settings">Settings</a>
          </li>
          <li className="profile-dropdown__item logout">
            <a href="#/logout">Logout</a>
          </li>
        </ul>
      </div>
    </>
  )
}
