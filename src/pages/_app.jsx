import '../styles/globals.css';
import Head from 'next/head';
import Header from '../../components/Header';

export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Gabriel | DEV</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
  </>)
}
