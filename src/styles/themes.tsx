const darkTheme = {
  name: "dark",
  color: {
    background: {
      app: "rgb(32,33,36)",
      primary: "rgb(35, 35, 39)",
      secondly: "rgb(48, 47, 53)",
      third: "rgb(87, 87, 87)",
    },
    text: {
      header:"hsl(0, 0%, 87.45098039215686%)",
      primary: "hsl(0, 0%, 100%)",
      secondly: "hsl(233.6842105263158, 39.86013986013989%, 71.96078431372548%)",
      link: "hsl(233.6842105263158, 39.86013986013989%, 71.96078431372548%)",
    },
    boxshadow: {
      shadow: "0 1px 6px 2px rgba(142, 142, 142, 0.422)",
      hover: "0 2px 6px 3px rgba(199, 199, 199, 0.287)"
    }
  },
  images: {
    background: {
      desktop: "images/bg-desktop-dark.jpg",
      mobile: "images/bg-mobile-dark.jpg",
    },
    toggle: "img/icon-moon.png",
    dice: "img/grid-3x3-gap-fill.svg",
    toggleMenu: "img/hamburger-dark.png",
    setting: "img/setting-dark.svg",
    arrowDown: "img/downarrow-dark.png",
    arrowUp: "img/uparrow-dark.png",
    moreDetail: "img/moreDetail-dark.png",
    cancelImg: "img/cancel-dark.png",
  },
};

const lightTheme = {
  name: "light",
  color: {
    background: {
      app: "hsl(0, 0%, 100%)",
      primary: "hsl(0, 0%, 98%)",
      secondly: "#eef1f2",
      third: "hsl(0, 0%, 55.294117647058826%)",
    },
    text: {
      header: "hsl(0, 0%, 0%)",
      primary: "hsl(235, 19%, 35%)",
      secondly: "hsl(0, 0%, 0%)",
      link: "rgb(64, 64, 200)",
      accent: "hsl(220, 98%, 61%)",
      hover: "hsl(235, 19%, 35%)",
    },
    boxshadow: {
      shadow: "0 1px 6px 2px rgb(64 60 67 / 16%)",
      hover: "0 2px 6px 3px rgba(70, 70, 70, 0.2)"
    }
  },
  images: {
    background: {
      desktop: "images/bg-desktop-light.jpg",
      mobile: "images/bg-mobile-light.jpg",
    },
    toggle: "img/icon-sun.png",
    dice: "img/grid-3x3-gap-fill.svg",
    toggleMenu: "img/hamburger-light.png",
    setting: "img/setting-light.svg",
    arrowUp: "img/uparrow-light.png",
    arrowDown: "img/downarrow-light.png",
    moreDetail: "img/moreDetail-light.png",
    cancelImg: "img/cancel-light.png",
  },
};

export const Themes = {
  dark: {
    name: darkTheme.name,
    color: darkTheme.color,
    images: darkTheme.images,
  },
  light: {
    name: lightTheme.name,
    color: lightTheme.color,
    images: lightTheme.images,
  },
};
