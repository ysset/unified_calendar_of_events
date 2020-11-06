import React from 'react'

import {useMediaQuery, CssBaseline, Box} from "@material-ui/core";
import { createMuiTheme, ThemeProvider} from "@material-ui/core/styles"

import Routes from './Components/routes/Routes'
import CalendarPage from "./Components/calendar/Calendar"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App(){
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
                    <Routes/>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                    </ThemeProvider>
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default App;
