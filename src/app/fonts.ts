import localFont from "next/font/local";

export const rebondGrotesque = localFont({
    src: [
        {
            path: "./fonts/Rebond Grotesque Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Rebond Grotesque.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Rebond Grotesque Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Rebond Grotesque Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/Rebond Grotesque Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Rebond Grotesque Extrabold.otf",
            weight: "900",
            style: "normal",
        },
    ],
});