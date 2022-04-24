import { useThemeContext } from "../context/ThemeContext";

const ToggleSwitch = () =>{

    const {themeMode, changeTheme} = useThemeContext()

    return (
    <div className="toggle-switch">
        <input type="checkbox" className="checkbox" checked={themeMode} name="mode" id="mode" onChange={changeTheme}/>
        <label className="label" htmlFor="mode">
            <span className="inner" />
            <span className="switch" />
        </label>
    </div>
    )
}

export default ToggleSwitch;