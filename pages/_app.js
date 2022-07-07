import '../styles/globals.scss'
import Head from 'next/head';
import Header from '../components/Header/Header';
import '../styles/hljs-custom.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Andrew Ozeki</title>
      </Head>
      <div>
        <Header/>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      
    </>
    
    
  )
}

export default MyApp;
