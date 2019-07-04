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
        "'Blackout', 'Futura', 'Helvetica Black', 'Arial Black', 'Helvetica', 'Arial', sans-serif",
      body:
        "'SF Mono', 'Courier', 'Roboto Mono', 'Fira Code', 'Fira Mono', monospace",
    },
  
    fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],

    breakpoints: ['40em', '52em', '64em', '80em'],

  };
  
  
  theme.textStyles = {
    body: {
      fontSize: theme.fontSizes[2],
      lineHeight: 1.4,
      fontFamily: theme.fonts.body,
      letterSpacing: -0.4,
    },
    xs: {
      fontSize: theme.fontSizes[1],
      lineHeight: 1.4,
      fontFamily: theme.fonts.body,
      letterSpacing: -0.4,
    },
    h1: {
      fontSize: theme.fontSizes[5],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
    },
    h2: {
      fontSize: theme.fontSizes[4],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
    },
    h3: {
      fontSize: theme.fontSizes[3],
      lineHeight: 1,
      fontFamily: theme.fonts.headings,
      textTransform: 'none',
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
    },
   
  }

  export default theme;