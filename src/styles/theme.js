const theme = {

    space: [
      // margin and padding
      0,
      4,
      8,
      16,
      32,
      64,
      128,
      256,
    ],
    
    colors: {
      navy: '#001E52',
      blue: '#4289FF',
    },
  
    fonts: {
      headings:
        "'Poppins', 'Futura PT', 'Helvetica Black', 'Arial Black', 'Helvetica Neue', 'Arial', sans-serif",
      body:
        "'Poppins', -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif",
    },
  
    fontSizes: [13, 15, 17, 25, 33, 49, 65, 97, 129],

    breakpoints: ['40em', '52em', '64em', '80em'],

  };
  
  
  theme.textStyles = {
    body: {
      fontSize: theme.fontSizes[2],
      lineHeight: 1.6,
      fontFamily: theme.fonts.body,
      letterSpacing: 0,
    },
    xs: {
      fontSize: theme.fontSizes[1],
      lineHeight: 1.5,
      fontFamily: theme.fonts.body,
      letterSpacing: 0,
    },
    h1: {
      fontSize: theme.fontSizes[5],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
      letterSpacing: -1,
    },
    h2: {
      fontSize: theme.fontSizes[4],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
      letterSpacing: -0.6,

    },
    h3: {
      fontSize: theme.fontSizes[3],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
      textTransform: 'none',
      letterSpacing: -0.4,
    },
    h4: {
      fontSize: theme.fontSizes[2],
      lineHeight: 1,
      fontFamily: theme.fonts.body,
      textTransform: 'none',
    },
    d1: {
      fontSize: theme.fontSizes[7],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
    },
    d2: {
      fontSize: theme.fontSizes[6],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
      letterSpacing: -2,
    },
   
  }

  export default theme;