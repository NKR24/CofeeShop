import styles from "./CoffeeStories.module.scss"
import first from "./fisrt.jpeg"
import second from "./second.jpeg"
import third from "./third.jpeg"
import Observer from "~/components/Observer/Observer"

export default function CoffeeStories() {
  return (
    <>
      <div class={styles.containerStories}>
        <div class={styles.section}>
          <Observer animationClass={styles.animated}>
            <div class={styles.first}>
              <div class={styles.card}>
                <div class={styles.tag}>
                  <span class={styles.number}>01</span>
                  <p class={styles.name}>Best Coffee Flavour</p>
                </div>
                <img src={first} alt="coffee" class={styles.img} />
              </div>
              <div class={styles.card}>
                <div class={styles.tag}>
                  <span class={styles.number}>02</span>
                  <p class={styles.name}>Place to get lost</p>
                </div>
                <img src={second} alt="coffee" class={styles.img} />
              </div>
              <div class={styles.card}>
                <div class={styles.tag}>
                  <span class={styles.number}>03</span>
                  <p class={styles.name}>Proper roesting</p>
                </div>
                <img src={third} alt="coffee" class={styles.img} />
              </div>
            </div>
          </Observer>
          <Observer animationClass={styles.animated}>
            <div class={styles.second}>
              <div class={styles.coffeephotos}>
                <img src={first} alt="coffee" />
                <img src={second} alt="coffee" />
              </div>
              <div class={styles.twoCups} />
              <div class={styles.newStory}>
                <span class={styles.history}>Our history</span>
                <h2 class={styles.gloryText}>
                  Create a <br /> new story with us
                </h2>
                <p class={styles.paragraph}>
                  mauris rhoncus in imperdiet placerat. vestibu emismd <br /> nisl suscirpit ligula
                  volutpat, a feyguat urn maxmaus.
                  <br /> cars massa nibhtincidunt. donec et nibh maximus, est
                  <br /> eu, mattis nuce. preasent ut quam quis quam venen
                  <br /> atis fringilla. morbi vastibulum id tells mmodo mattis.
                  <br /> aliauam erat volutpal.
                </p>
              </div>
            </div>
          </Observer>
        </div>
      </div>
    </>
  )
}
