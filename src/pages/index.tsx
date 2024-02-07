import type { NextPage } from "next"
import transition from "../utilities/transition"
import { Header, HomeSectionCard } from "../component/organisms"
import Hero from "../component/molecules/Hero"
import { SlideClientes } from "../component/molecules"

const HomePage: NextPage = () => {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <SlideClientes />
      <HomeSectionCard />
    </>
  )
}

export default transition(HomePage)
