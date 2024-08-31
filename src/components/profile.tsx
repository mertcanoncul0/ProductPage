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
        <header className="profile-dropdown__header">
          <h3 className="profile-dropdown__header-title">Profile</h3>
        </header>
        <ul className={`profile-dropdown__list`}></ul>
      </div>
    </>
  )
}
