module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors:{       
        grey: 'rgb(200 199 199 / <alpha-value>)',
      }
    },
  },
  variants: {
    extend: {
      // Aquí puedes extender o personalizar las variantes de clases de Tailwind
    },
  },
  plugins: [
    // Aquí puedes habilitar plugins adicionales de Tailwind
  ],
};



