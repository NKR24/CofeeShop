import { Title } from "@solidjs/meta"
import CoffeeMachine from "~/components/index/CoffeeMachine/CoffeeMachine"
import CoffeeProduct from "~/components/index/CoffeeProduct/CoffeeProduct"
import CoffeeStories from "~/components/index/CoffeeStories/CoffeeStories"
import MainPage from "~/components/index/MainPage/MainPage"
import Navbar from "~/components/index/Navbar/Navbar"

export default function Home() {
  return (
    <main>
      <Title>Coffee Shop</Title>
      <Navbar />
      <MainPage />
      <CoffeeStories />
      <CoffeeProduct />
      <CoffeeMachine />
    </main>
  )
}
