import logo from "../airbnb.png"

export default function  Navbar(props){
    return (
        <nav className={props.darkMode? "dark" : ""}>
            <img src={logo} alt="airbnblogo" />
            <div className="nav-right">
                <span>Light</span>
                <div onClick={props.switchMode} className="switching-container">
                    <div className="circular-switching"></div>
                </div>
                <span>Dark</span>
            </div>
        </nav>
    )
}