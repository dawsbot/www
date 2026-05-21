// Single site theme: high-contrast black & white "zebra" with an electric-lime accent.
export const themes = {
  zebra: {
    name: 'Zebra',

    // Surfaces
    bg: '#0e0e0e', // dark bands
    bodyBg: '#ffffff', // page paper
    text: '#0e0e0e',
    navBg: '#ffffff',
    navText: '#0e0e0e',

    // Accent
    accent: '#c4f000', // electric lime
    ink: '#0e0e0e',
    paper: '#ffffff',

    // Type
    headingFont: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
    bodyFont: "'Hanken Grotesk', 'Helvetica Neue', Arial, sans-serif",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Hanken+Grotesk:wght@400;500;600;700&display=swap',

    submitLabel: 'SEND IT',
  },
};

export const themeKeys = Object.keys(themes);
export const defaultTheme = 'zebra';
