import '../styles/header.scss'

const logo = require("../../public/logo.svg")

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="to.do"/>
      </div>
    </header>
  )
}