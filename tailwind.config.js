module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,json}"],
    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            mdlg: "920px",

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1400px",
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            caption: "3.5rem",
            subcaption: "1.86rem",
            hero: "3rem",
            "nav-size": "1.33rem",
            "h1-size": ["1.575rem", "2.36rem"],
            "h2-size": ["1.35rem", "2.02rem"],
            "p-size": ["1.24rem", "1.85rem"],
            "offer-size": ["1.125rem", "1.85rem"],
            "small-size": ["1rem", "1.68rem"],
            "mobile-small-size": ["1.2rem", "2rem"],
            "mobile-p-size": ["1.48rem", "2.22rem"],
            "mobile-h1-size": ["1.89rem", "2.83rem"],
            "mobile-h2-size": ["1.62rem", "2.42rem"],
            "mobile-offer-size": ["1.135rem", "2.22rem"],
        },
        extend: {
            borderRadius: {
                navbar: "0 0 5.625rem 0",
                "hero-desktop": "0 3.44rem",
                "dark-desktop": "2.81rem 0 0 2.81rem",
                "small-images": "0.125rem 2.5rem",
                standard: "1.875rem 0.31rem",
                mirrored: "0.31rem 3.125rem",
                "offer-img": "1.68rem 0",
                "offer-figcaption": "0 0 1.68rem 0",
                button: "2rem",
                submit: "0 0.6rem",
                "contact-field": "0 .9rem",
                md: "0.75rem",
                "mobile-menu": "30px 2px",
            },
            colors: {
                primary: "hsl(0, 0%, 87%)",
                secondary: "hsl(228, 5%, 21%)",
                nav: "hsl(0, 0%, 6%)",
                "mobile-nav": "hsl(0, 0%, 10%)",
                "content-background": "hsl(0, 0%, 94%)",
                "caption-background": "hsla(0, 0%, 0%, .7)",
            },
            fontFamily: {
                hero: ["Barlow Condensed", "sans-serif"],
                main: ["Poppins", "sans-serif"],
            },
            backgroundImage: {
                default: "url('../images/hero-home-m.webp')",
                action: "url('../images/action-call.webp')",
            },
            margin: {
                "navbar-gap": "max(5vh, 3.125rem)",
            },
        },
    },
};
