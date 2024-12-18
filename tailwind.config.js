/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ['./pages/*.html',
  './assets/**/*.js'],
  theme: {
    fontFamily: {
      Evaes: ["mr-eaves-modern"],
      Articulate:["articulat-cf"]
    },
    colors:{
      transparent:"transparent",
      grey:"#4E4E4E",
      blue:"#47557F",
      White:"#FFFFFF",
      lightblue:"#6475AD",
      charcoal:"#293148"
    },
    padding: {
      0: '0px',
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      28:'28px',
      30: '30px',
      35: '35px',
      38:'38px',
      40: '40px',
      45: '45px',
      50: '50px',
      50: '50px',
      55: '55px',
      60: '60px',
      65: '65px',
      70: '70px',
      75: '75px',
      80: '80px',
      85: '85px',
      90: '90px',
      95: '95px',
      100: '100px',
      105: '105px',
      110: '110px',
      115: '115px',
      120: '120px',
    },
    margin: {
      auto: 'auto',
      0: '0px',
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      28:'28px',
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      50: '50px',
      55: '55px',
      60: '60px',
      65: '65px',
      70: '70px',
      75: '75px',
      80: '80px',
      85: '85px',
      90: '90px',
      95: '95px',
      100: '100px',
      120: '120px',
    },
    spacing: {
      0: "0",
      5: "5px",
      8:"8px",
      10: "10px",
      15: "15px",
      20: "20px",
      25: "25px",
      28:"28px",
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      55: '55px',
      60: '60px',
      65: '65px',
      70: '70px',
      75: '75px',
      80: '80px',
      85: '85px',
      90: '90px',
      95: '95px',
      100: '100px',
    },
    borderRadius: {
      none: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      5: '5px',
      10:'10px',
      15: '15px',
      30: '30px',
      50: '50px',
      100:'100px',
      500: '500px',
      999: '999px',
      "50per":'50%',
      "100per": '100%',
    },
    fontWeight: {
      hairline: 100,
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800:'800'
    },
    fontSize:{
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      22: '22px',
      24:'24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      42: '42px',
      44: '44px',
      46: '46px',
      48: '48px',
      50: '50px',
      52:'52px',
      64:'64px',
      72:'72px',
      80:'80px',
      84:'84px',

    },
    lineHeight:{
      26:'26px',
      28:'28px',
      35:'35px',
      53:'53px',
      98:'98px'
    },
    letterSpacing: {
      '01em': '0.01em',
      '02em': '0.02em',
      '04em': '0.04em',
    },
    inset: {
      0: '0px',
      5: '5px',
      10: '10px',
      13: '13px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      60: '60px',
      70: '70px',
      75: '75px',
      80: '80px',
      90: '90px',
      100: '100px',
      '50per': '50%',
    },
    backgroundImage: theme => ({
      none: 'none',
      'innerheader-gradient': 'linear-gradient(0deg, #E0E7EF, #E0E7EF), linear-gradient(360deg, #E0E7EF 0%, rgba(224, 231, 239, 0) 29.9%)',
      // gradient1 : 'linear-gradient(0deg, #77BFBC, #77BFBC), linear-gradient(180deg, #E0E7EF 0%, rgba(224, 231, 239, 0.869061) 2.7%, rgba(224, 231, 239, 0.730004) 5.19%, rgba(224, 231, 239, 0.50838) 8.09%, rgba(224, 231, 239, 0) 12.56%)'
    }),
    extend: {
      zIndex:{
        99:"99"
      },
      screens:{
        xxs: { min : "320px" },
        xs: { min : "425px" },
        576 : {min : "576px"},
        sm: { min: "640px" },
        md: { min : "768px" },
        lg: { min : "1024px" },
        xl: { min : "1280px" },
        xxl: { min : "1440px" },
        "3xl" : { min : "1512px"},

        "3xlscreen": { max: "1512px" },
        "2xlscreen": { max: "1440px" },
        xlscreen: { max: "1280px" },
        lgscreen: { max: "1024px" },
        mdscreen: { max: "768px" },
        smscreen: { max: "640px" },
        576 : {max : "576px"},
        xsscreen: { max: "425px" },
        "2xsscreen":{max:"320px"},
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        0: '0px',            
      },
      translate: {
        0: '0px',
        'minus_50': '-50%',
        'plus_50' : '50%',
      },
      boxShadow:{
        headershadow:"0px 4px 10px 0px rgba(0, 0, 0, 0.04)"
      }
    },
  },
  plugins: [],
}

