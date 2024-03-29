import Navbar from "../components/Navbar/Navbar.tsx"
import MainPage from "../components/MainPage/MainPage.tsx"
import CoffeeStories from "../components/CoffeeStories/CoffeeStories.tsx"
import CoffeeProduct from "../components/CoffeeProduct/CoffeeProduct.tsx"
import CoffeeMachine from "../components/CoffeeMachine/CoffeeMachine.tsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage />
      <CoffeeStories />
      <CoffeeProduct />
      <CoffeeMachine />
    </>
  )
}
