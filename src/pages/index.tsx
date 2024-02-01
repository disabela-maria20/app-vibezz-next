import type { NextPage } from "next"
import transition from "../utilities/transition"
import { Header } from "../component/organisms"
import Hero from "../component/molecules/Hero"
import { SlideClientes } from "../component/molecules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const HomePage: NextPage = () => {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <SlideClientes />
    </>
  )
}

export default transition(HomePage)
