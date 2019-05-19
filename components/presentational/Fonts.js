import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Work+Sans';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const workSans = new FontFaceObserver('Work Sans');

  workSans.load().then(() => {
    document.documentElement.classList.add('work-sans');
  });
};

export default Fonts;
