import styles from "./CoffeeMachine.module.scss"
import machine from "./CoffeeMachine.png"
import Observer from "~/components/Observer/Observer"

export default function CoffeeMachine() {
  return (
    <>
      <div class={styles.container}>
        <Observer animationClass={styles.animated}>
          <div class={styles.section}>
            <div class={styles.image}>
              <img src={machine} alt="coffee machine" />
            </div>
            <div class={styles.part}>
              <h2 class={styles.main}>
                Coffee <br /> machine, buy for home
              </h2>
              <p class={styles.description}>
                mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula <br />{" "}
                volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nib <br />
                maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri <br />{" "}
                ngilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.
              </p>
              <button class={styles.button}>
                <span>DISCOVER NOW</span>
              </button>
            </div>
          </div>
        </Observer>
      </div>
    </>
  )
}
