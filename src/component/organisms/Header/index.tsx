/* eslint-disable prettier/prettier */
import { useRouter } from "next/router"
import { Menu } from "../../molecules/"
import Style from "./Header.module.scss"

type Props = {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  const {pathname} = useRouter()
  
  const verificarHome =  pathname != '/' ? true : false

  return (
    <>
      <header className={Style.bg_header} style={{backgroundPositionY: verificarHome ? 'center': 'bottom'}}>
        <Menu />
        {children}
      </header>
     {verificarHome && <div className={Style.border}></div>} 
    </>
  )
}

export default Header
