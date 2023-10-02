import { Menu } from "../../molecules/"
import Style from "./Header.module.scss"

type Props = {
  children?: React.ReactNode
}
const Header = ({ children }: Props) => {
  return (
    <header className={Style.bg_header}>
      <Menu />
      {children}
    </header>
  )
}

export default Header
