const { grey } = require("@mui/material/colors");

const ThemeMode = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                text: {
                    main: grey[300]
                },
                background: {
                    main: "#212121"
                },
                bgClickSidebar: {
                    main: grey[400]
                },
                bgCardSubjects: {
                    main: "#b2e7a5"
                }
            }
            : {
                text: {
                    main: "#e1f5fe"
                },
                background: {
                    main: "#212121",
                },
                bgClickSidebar: {
                    main: grey[800]
                },
                bgCardSubjects: {
                    main: "#009f5d"
                }

            }),
    },
});
export default ThemeMode;