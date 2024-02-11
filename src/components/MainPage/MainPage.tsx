import styles from "./MainPage.module.scss"
import cofee from "../../assets/img/main-cofee.jpg"

export default function MainPage() {
  return (
    <>
      <main className={styles.container}>
        <img src={cofee} alt="cofee logo" className={styles.coffeeMain} />
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
            <button className={styles.buttonPlay}>
              <svg
                width="93"
                height="109"
                viewBox="0 0 93 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="47" cy="35" r="34.25" stroke="white" stroke-width="1.5" />
                <path d="M40 26L54 35L40 44V26Z" fill="white" />
                <path
                  d="M1.40909 105H2.81818V100.75H5.36364C8.07386 100.75 9.29545 99.1023 9.29545 97.0455C9.29545 94.9886 8.07386 93.3636 5.34091 93.3636H1.40909V105ZM2.81818 99.5V94.6136H5.29545C7.1875 94.6136 7.90909 95.6477 7.90909 97.0455C7.90909 98.4432 7.1875 99.5 5.31818 99.5H2.81818ZM11.5653 105H18.3835V103.75H12.9744V93.3636H11.5653V105ZM21.777 105L22.9474 101.705H27.652L28.8224 105H30.2997L26.027 93.3636H24.5724L20.2997 105H21.777ZM23.3906 100.455L25.2543 95.2045H25.3452L27.2088 100.455H23.3906ZM29.9247 93.3636L34.1293 100.205V105H35.5384V100.205L39.7429 93.3636H38.1293L34.902 98.7955H34.7656L31.5384 93.3636H29.9247ZM46.5426 93.3636H45.0653L49.3381 105H50.7926L55.0653 93.3636H53.5881L50.1335 103.159H49.9972L46.5426 93.3636ZM58.2869 93.3636H56.8778V105H58.2869V93.3636ZM64.7031 105C68.2486 105 70.2486 102.795 70.2486 99.1591C70.2486 95.5455 68.2486 93.3636 64.8622 93.3636H61.1122V105H64.7031ZM62.5213 103.75V94.6136H64.7713C67.4986 94.6136 68.8849 96.3409 68.8849 99.1591C68.8849 102 67.4986 103.75 64.6122 103.75H62.5213ZM72.6122 105H79.7259V103.75H74.0213V99.7955H79.2713V98.5455H74.0213V94.6136H79.6349V93.3636H72.6122V105ZM91.9929 99.1818C91.9929 95.5 89.8338 93.2045 86.8565 93.2045C83.8793 93.2045 81.7202 95.5 81.7202 99.1818C81.7202 102.864 83.8793 105.159 86.8565 105.159C89.8338 105.159 91.9929 102.864 91.9929 99.1818ZM90.6293 99.1818C90.6293 102.205 88.9702 103.841 86.8565 103.841C84.7429 103.841 83.0838 102.205 83.0838 99.1818C83.0838 96.1591 84.7429 94.5227 86.8565 94.5227C88.9702 94.5227 90.6293 96.1591 90.6293 99.1818Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
