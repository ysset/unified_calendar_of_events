import React from 'react'

import {useMediaQuery, CssBaseline} from "@material-ui/core";
import { createMuiTheme, ThemeProvider} from "@material-ui/core/styles"

import CalendarPage from "./Components/calendar/Calendar"


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
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <CalendarPage/>
            </ThemeProvider>
        </>
    );

}

export default App;
