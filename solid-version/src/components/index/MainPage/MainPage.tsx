import styles from "./MainPage.module.scss"
import coffee from "../../../assets/img/main-cofee.jpg"

export default function MainPage() {
  return (
    <>
      <main class={styles.container}>
        <img src={coffee} alt="coffee logo" class={styles.coffeeMain} />
        <div class={styles.main}>
          <div class={styles.first}>
            <h1 class={styles.mainText}>
              Enjoy Your <br /> Morning Coffee.
            </h1>
            <h2 class={styles.lowText}>
              The coofee is brewed by fist roasting the green coffee <br /> beans over hot coals in
              brazier. given to Opportunity
            </h2>
            <button class={styles.testcoffee}>
              <span>Test Coffee</span>
            </button>
          </div>
          <div class={styles.second}>
            <button class={styles.buttonPlay} />
          </div>
        </div>
      </main>
    </>
  )
}
