module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      body: [
        '游ゴシック',
        'YuGothic', 
        '"ヒラギノ角ゴ Pro W3"',
        '"Hiragino Kaku Gothic Pro"',
        'Verdana',
        'メイリオ',
        'Meiryo, Osaka',
        '"ＭＳ Ｐゴシック"',
        '"MS PGothic"', 
        'sans-serif',
      ]
    }
  },
  theme: {
    screens: {
      medium: '980px',
      small: '767px',
    },
    extend: {
      colors: {
        header: '#47B39D',
        headerHover: '#57BCA8',
        main: '#41AE99',
        footer: 'rgb(3,23,49)',
      },
      width: {
        '3/16': '18.75%',
        '3/10': '30%',
      },
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".triangle": {
          borderTop: "20px solid #4a5568",
          borderRight: "50px solid transparent",
          borderBottom: "20px solid transparent",
          borderLeft: "50px solid transparent",
        },

      
      };
      addUtilities(newUtilities);
    }
  ],
};
