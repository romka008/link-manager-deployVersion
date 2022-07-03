import React, {useState} from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {purple} from '@mui/material/colors'
import {CssBaseline} from '@mui/material'

export const ColorModeContext = React.createContext({mode: 'light'})

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: purple[400],
        },
        secondary: {
            main: '#001e3c',
        },
        action: {
            active: '#90caf9',
        },
        text: {
            secondary: '#000000',
        },
    },
})

const themeDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#003892',
        },
        background: {
            default: '#22272e',
            paper: '#2d333b',
        },
        text: {
            secondary: '#cdd9e5',
        },
        action: {
            active: '#90caf9',
        },
        success: {
            main: '#ef6c00',
        },
    },
})

function Theme({children, darkMode}) {
    const defaultTheme = React.useMemo(() => (darkMode ? themeDark : theme), [darkMode])
    return (
        <ColorModeContext.Provider value={darkMode}>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline /> {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export const withTheme = (Component) => {
    return () => {
        const [darkMode, setDarkMode] = useState(false)
        return (
            <Theme darkMode={darkMode}>
                <Component darkMode={darkMode} setDarkMode={setDarkMode} />
            </Theme>
        )
    }
}
