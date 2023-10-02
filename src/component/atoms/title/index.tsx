import S from "./title.module.scss"

type Props = {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <div className={S.title}>{children}</div>
}

export default Title
