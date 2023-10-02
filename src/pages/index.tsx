import type { NextPage } from "next"
import { Home } from "../component/templates"
import transition from "../utilities/transition"

const HomePage: NextPage = () => {
  // const bla = 'bla'
  return <Home />
}

export default transition(HomePage)
