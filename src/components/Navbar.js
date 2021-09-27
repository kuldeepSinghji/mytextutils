import React,{useState} from 'react'
import PropTypes from 'prop-types'
import "./Navbar.css"
function Navbar(props) {
    const [mode, setMode] = useState("light")
    const [btnmode, setBtnmode] = useState("Dark Mode")
    const toggleMode= ()=>{
        if(mode === "light"){
        setMode("dark")
        setBtnmode("Light Mode")
        }
        else{
            setMode("light")
            setBtnmode("Dark Mode")
        }
    }
    return (
        <>
        <div  className={`navContainer ${mode}`}>
            <nav className="navbar">
                <li>{props.title}</li>
            </nav>
            <div className="calender-footer">
                <div className="toggle">
                    <span>{btnmode}</span>
                </div>
                <div onClick={props.onchange}>
                <div onClick={toggleMode}className="dark-mode-switch">
                    <div  className="dark-mode-switch-ident">
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
Navbar.propTypes = {title:PropTypes.string.isRequired,
                    about:PropTypes.string.isRequired};
Navbar.defaultProps = {title:"Set title here",
                    about:"set about there"}
export default Navbar
