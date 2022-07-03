import AppScreen from './components/AppScreen'
import {withTheme} from './components/Theme/Theme'
import {FC} from 'react'
import { Theme } from './types/types'



const App:FC<Theme> = ({setDarkMode, darkMode})=> {
    return <AppScreen setDarkMode={setDarkMode} darkMode={darkMode} />
}

export default withTheme(App)
