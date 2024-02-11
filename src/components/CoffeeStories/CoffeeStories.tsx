import styles from "./CoffeeStoryes.module.scss"
import first from "./fisrt.jpeg"
import second from "./second.jpeg"
import third from "./third.jpeg"
import { InView } from "react-intersection-observer"

export default function CoffeeStories() {
  return (
    <>
      <div className={styles.containerStories}>
        <div className={styles.section}>
          <InView>
            {({ inView, ref }) => (
              <div ref={ref} className={inView ? styles.animated : ""}>
                <div className={styles.first}>
                  <div className={styles.card}>
                    <div className={styles.tag}>
                      <span className={styles.number}>01</span>
                      <p className={styles.name}>Best Coffee Flavour</p>
                    </div>
                    <img src={first} alt="coffee" className={styles.img} />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.tag}>
                      <span className={styles.number}>02</span>
                      <p className={styles.name}>Place to get lost</p>
                    </div>
                    <img src={second} alt="coffee" className={styles.img} />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.tag}>
                      <span className={styles.number}>03</span>
                      <p className={styles.name}>Proper roesting</p>
                    </div>
                    <img src={third} alt="coffee" className={styles.img} />
                  </div>
                </div>
              </div>
            )}
          </InView>
          <InView>
            {({ inView, ref }) => (
              <div ref={ref} className={inView ? styles.animated : ""}>
                <div className={styles.second}>
                  <div className={styles.coffeephotos}>
                    <img src={first} alt="coffee" />
                    <img src={second} alt="coffee" />
                  </div>
                  <div className={styles.twoCups} />
                  <div className={styles.newStory}>
                    <span className={styles.history}>Our history</span>
                    <h2 className={styles.gloryText}>
                      Create a <br /> new story with us
                    </h2>
                    <p className={styles.paragraph}>
                      mauris rhoncus in imperdiet placerat. vestibu emismd <br /> nisl suscirpit
                      ligula volutpat, a feyguat urn maxmaus.
                      <br /> cars massa nibhtincidunt. donec et nibh maximus, est
                      <br /> eu, mattis nuce. preasent ut quam quis quam venen
                      <br /> atis fringilla. morbi vastibulum id tells mmodo mattis.
                      <br /> aliauam erat volutpal.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </InView>
        </div>
      </div>
    </>
  )
}
