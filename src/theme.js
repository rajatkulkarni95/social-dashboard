const defaultTheme = {
  font: "Inter",
  fontSize: "14px",
  fontWeights: {
    light: 400,
    bold: 700,
  },

  desktop: "1440px",
  mobile: "375px",
};

const dark = {
  colors: {
    bg: "hsl(230, 17%, 14%)",
    bgPattern: "hsl(232, 19%, 15%)",
    bgCard: "hsl(228, 28%, 20%)",
    altText: "hsl(228, 34%, 66%)",
    text: "hsl(0, 0%, 100%)",
  },
};

const light = {
  colors: {
    bg: "hsl(0, 0%, 100%)",
    bgPattern: "hsl(225, 100%, 98%)",
    bgCard: "hsl(227, 47%, 96%)",
    altText: "hsl(228, 12%, 44%)",
    text: "hsl(230, 17%, 14%)",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
