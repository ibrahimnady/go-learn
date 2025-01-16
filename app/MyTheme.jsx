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
                },
                // background:{
                //     main:"",
                //     bgButton:"",
                //     bgLink:"",
                //     bgHeadline:"",
                //     bgSidebar:"",
                //     bgSubscrbtion:"",
                //     bgCardSubjects:"",
                //     bgCardTeachers:"",
                //     bgContant:"",
                // },
                // Text: {
                //     main: "",
                //     TXTButton: "",
                //     TXTLink: "",
                //     TXTHeadline: "#11baf0",
                //     TXTSidebar: "",
                //     TXTSubscrbtion: "",
                //     TXTCardSubjects: "",
                //     TXTCardTeachers: "",
                //     TXTContant: "",
                // },

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
                // background: {
                //     main: "#000000",
                //     bgButton: "",
                //     bgLink: "",
                //     bgHeadline: "",
                //     bgSidebar: "",
                //     bgSubscrbtion: "",
                //     bgCardSubjects: "",
                //     bgCardTeachers: "",
                //     bgContant: "",
                // },
                // Text: {
                //     main: "",
                //     TXTButton: "",
                //     TXTLink: "",
                //     TXTHeadline: "",
                //     TXTSidebar: "",
                //     TXTSubscrbtion: "",
                //     TXTCardSubjects: "",
                //     TXTCardTeachers: "",
                //     TXTContant: "",
                // },

            }),
    },
});
export default ThemeMode;