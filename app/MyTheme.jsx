const { grey } = require("@mui/material/colors");

const ThemeMode = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // text: {
                //     main: grey[300]
                // },
                // background: {
                //     main: "#212121"
                // },
                // bgClickSidebar: {
                //     main: grey[400]
                // },
                // bgCardSubjects: {
                //     main: "#b2e7a5"
                // },
                background:{
                    main:"#00A9FF",
                    bgSidebar:"#8CC0DE",
                    bgButton:"#0075ff",
                    bgLink:"#337ab7",
                    bgHeadline:"#337ab7",
                    bgSubscrbtion:"#89CFF3",
                    bgCardSubjects:"#A0E9FF",
                    bgCardTeachers:"#CDF5FD",
                    bgContant:"#ffffff",
                },
                Text: {
                    main: "#333333",
                    TXTSidebar: "#11baf0",
                    TXTButton: "#ffffff",
                    TXTLink: "#337ab7",
                    TXTHeadline: "#11baf0",
                    TXTSubscrbtion: "#333333",
                    TXTCardSubjects: "#333333",
                    TXTCardTeachers: "#333333",
                    TXTContant: "#333333",
                },

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
                },
                background: {
                    main: "#212121",
                    bgButton: "#facc15",
                    bgLink: "#66d9ef",
                    bgHeadline: "#ffffff",
                    bgSidebar: "#333333",
                    bgSubscrbtion: "#333333",
                    bgCardSubjects: "#009f5d",
                    bgCardTeachers: "#044343",
                    bgContant: "#333333",
                },
                Text: {
                    main: "#ffffff",
                    TXTButton: "#333333",
                    TXTLink: "#66d9ef",
                    TXTHeadline: "#ffffff",
                    TXTSidebar: "#ffffff",
                    TXTSubscrbtion: "#ffffff",
                    TXTCardSubjects: "#ffffff",
                    TXTCardTeachers: "#ffffff",
                    TXTContant: "#ffffff",
                },

            }),
    },
});
export default ThemeMode;