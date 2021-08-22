import 'tailwindcss/tailwind.css'
import { ThemeProvider } from '../Components/themeContext'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

const progress = new ProgressBar({
  size: 4,
  color: "#800080",
  className: "z-50",
  delay: 100,
});

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <body className="bg-white text-black
      dark:bg-gray-900 dark:text-white transition-all">
      
  <Component {...pageProps} />
  </body>
  </ThemeProvider>
  
  )
}

export default MyApp
