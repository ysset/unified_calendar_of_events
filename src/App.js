import React from 'react'

import {useMediaQuery, CssBaseline} from "@material-ui/core";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"

import Routes from './Components/routes/Routes'
import {BrowserRouter, Switch} from 'react-router-dom'

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')

    const theme = React.useMemo(() => createMuiTheme({
            palette: {
                type: prefersDarkMode ? 'dark' : 'light',
            },
        }),
        [prefersDarkMode]
    )

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                    <Routes/>
                    </ThemeProvider>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
