import styles from "./Navbar.module.scss"
import logo from "../../../assets/img/Logo.svg"
import clsx from "clsx"

export default function Navbar() {
  return (
    <>
      <nav class={styles.nav}>
        <Pages />
        <Logo />
        <AnotherInfo />
      </nav>
    </>
  )
}

function Pages() {
  return (
    <>
      <div class={styles.firstPart}>
        <span class={styles.textNav}>Home</span>
        <span class={styles.textNav}>About</span>
        <span class={styles.textNav}>Menu</span>
        <span class={styles.textNav}>Reservation</span>
      </div>
    </>
  )
}

function Logo() {
  return (
    <>
      <img src={logo} alt="logo" class={styles.logo} />
    </>
  )
}

function AnotherInfo() {
  return (
    <>
      <div class={styles.info}>
        <span class={clsx(styles.textNav, styles.hidden)}>Pages</span>
        <span class={clsx(styles.textNav, styles.hidden)}>Shop</span>
        <span class={clsx(styles.textNav, styles.hidden)}>Contact</span>
        <button class={styles.find}>
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.25 26.25L20.8125 20.8125"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        <button class={styles.basket}>
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 2.5L3.75 7.5V25C3.75 25.663 4.01339 26.2989 4.48223 26.7678C4.95107 27.2366 5.58696 27.5 6.25 27.5H23.75C24.413 27.5 25.0489 27.2366 25.5178 26.7678C25.9866 26.2989 26.25 25.663 26.25 25V7.5L22.5 2.5H7.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.75 7.5H26.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12.5C20 13.8261 19.4732 15.0979 18.5355 16.0355C17.5979 16.9732 16.3261 17.5 15 17.5C13.6739 17.5 12.4021 16.9732 11.4645 16.0355C10.5268 15.0979 10 13.8261 10 12.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  )
}
