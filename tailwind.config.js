module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#007474",
                secondary: "#F4AE3F",
                dark: "#1e293b",
            },
            spacing: {
                128: "32rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "base",
            strategy: "class",
        }),
    ],
};