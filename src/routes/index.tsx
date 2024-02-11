import Navbar from "../components/Navbar/Navbar.tsx"
import MainPage from "../components/MainPage/MainPage.tsx"
import CoffeeStories from "../components/CoffeeStories/CoffeeStories.tsx"


export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage />
      <CoffeeStories />
      {/*<CoffeeProduct />*/}
    </>
  )
}
