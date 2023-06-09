import Navbar from '@/components/navbar'
import { buttonList } from '@/constants/navbar'
import '@/styles/globals.css'
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/react-dropdown.css'
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Component {...pageProps} />
    </>
          
        )
}
