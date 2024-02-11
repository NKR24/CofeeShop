import styles from "./MainPage.module.scss"
import coffee from "../../assets/img/main-cofee.jpg"
import SteamAnimation from "../SteamAnimation/SteamAnimation.tsx"

export default function MainPage() {
  return (
    <>
      <main className={styles.container}>
        <img src={coffee} alt="coffee logo" className={styles.coffeeMain} />
        <div className={styles.main}>
          <div className={styles.first}>
            <h1 className={styles.mainText}>
              Enjoy Your <br /> Morning Coffee.
            </h1>
            <h2 className={styles.lowText}>
              The coofee is brewed by fist roasting the green coffee <br /> beans over hot coals in
              brazier. given to Opportunity
            </h2>
            <button className={styles.testcoffee}>
              <span>Test Coffee</span>
            </button>
          </div>
          <div className={styles.second}>
            <button className={styles.buttonPlay}/>
          </div>
        </div>
      </main>
    </>
  )
}
