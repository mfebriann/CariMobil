module.exports = {
  mode: "jit",
  purge: {
    content: ["./**/*.html"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        xlm: "2000px",
        xll: "2300px",
        csm: "250px",
        ctalg: "827px",
        pricesm: "150px",
        formmd: "450px",
        formlg: "600px",
      },
      height: {
        csm: "300px",
      },
      zIndex: {
        "-1": -1,
        11: "11",
      },
      textColor: {
        "primary-color": "#333",
        "price-select-car": "#757474",
        "info-listCar-text": "#ccc",
        "tim-text-description": "#838383",
        "placeholder-input": "rgba(51,51,51, 0.4)",
        answer: "#d032c0",
        borderTop: "#c93231",
        "form-text-description": "#6f6f6f",
        "placeholder-newsletter": "#949494",
      },
      borderColor: {
        "placeholder-newsletter": "#949494",
      },
      backgroundColor: {
        footer: "#333",
        announcement: "#1a75df",
        navigation: "#eb4038",
        banner: "#ff3b32",
        "price-listCar": "#1fcf7b",
        selectCar: "#f5f5f5",
        buyForm: "#1a75df",
        buyFormHover: "#1b69c2",
        input: "#f2f2f2",
        accordion: "#7e7e7e",
        "overlay-menu": "rgba(0,0,0,0.5)",
        "overlay-cta": "rgba(0,0,0,0.35)",
        "overlay-orderCars": "rgba(0,0,0,0.25)",
        "navigation-hover": "#f84a42",
        "hover-selectCar": "#d6d6d6",
      },
      backgroundImage: {
        "menu-line": "url('../../assets/icons/menu-line.svg')",
        menu: "url('../../assets/images/menu.webp')",
        about: "url('../../assets/images/bg-about.webp')",
        "thumb-about": "url('../../assets/images/thumb-about.webp')",
        cta: "url('../../assets/images/bg-cta.webp')",
        order1: "url('../../assets/images/order1.webp')",
        order2: "url('../../assets/images/order2.webp')",
        order3: "url('../../assets/images/order3.webp')",
        order4: "url('../../assets/images/order4.webp')",
        form: "url('../../assets/images/bg-form.webp')",
      },
      borderRadius: {
        thirdRadius: "3.5rem",
      },
      boxShadow: {
        primaryShadow: "0 4px 10px rgba(0,0,0, 0.25)",
        successShadow: "5px 5px  15px rgba(0,0,0, 0.25)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        22: "60px",
        "-300": "-300px",
      },
      lineHeight: {
        extra: "65px",
        sm: "2.3",
      },
      scale: {
        "-1": "-1",
      },
      inset: {
        "-500": "-500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
