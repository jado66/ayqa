import '../styles/globals.css'
import '../styles/styles.scss'
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';

export default function App({ Component, pageProps, session }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []); 
  
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  )
}
