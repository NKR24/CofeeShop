import styles from "./CoffeeMachine.module.scss"
import machine from "./CoffeeMachine.png"
import { InView } from "react-intersection-observer"

export default function CoffeeMachine() {
  return (
    <>
      <div className={styles.container}>
        <InView>
          {({ inView, ref }) => (
            <div ref={ref} className={inView ? styles.animated : ""}>
              <div className={styles.section}>
                <div className={styles.image}>
                  <img src={machine} alt="coffee machine" />
                </div>
                <div className={styles.part}>
                  <h2 className={styles.main}>
                    Coffee <br /> machine, buy for home
                  </h2>
                  <p className={styles.description}>
                    mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula{" "}
                    <br /> volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nib{" "}
                    <br />
                    maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri <br />{" "}
                    ngilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.
                  </p>
                  <button className={styles.button}>
                    <span>DISCOVER NOW</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </>
  )
}
