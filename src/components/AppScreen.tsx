import Header from './Header/Header'
import {Sidebar} from './sidebar/sidebar'
import './../style.css'
import Content from './content/content'
import {MaterialUISwitch} from './Theme/Switch'
import {FC} from 'react'
import { Theme } from '../types/types'

const AppScreen:FC<Theme> = ({setDarkMode, darkMode}) => {
    const handleChange = (): void => {
        setDarkMode(!darkMode)
    }
    return (
        <div className="App">
            <Header />
            <MaterialUISwitch checked={darkMode} onChange={handleChange} />
            <div className="main">
                <Sidebar />
                <Content />
            </div>
        </div>
    )
}

export default AppScreen
