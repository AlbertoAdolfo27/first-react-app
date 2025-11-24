import '../assets/styles/module.Header.css'

type HeaderProps = {
    setPage: (page: "Home" | "About") => void
}

function Header({ setPage }: HeaderProps) {

    return (
        <header>
            <nav className="nav">
                <ul>
                    <li>
                        <button onClick={() => setPage("Home")}>Inicio</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button onClick={() => setPage("About")}>Sobre nos</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;