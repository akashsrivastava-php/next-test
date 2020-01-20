import React from 'react'
import App from 'next/app'
import { toast } from 'react-toastify'
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/scss/now-ui-kit.scss";
import "../public/assets/demo/demo.css";
import "../public/assets/demo/nucleo-icons-page-styles.css";
import 'react-toastify/dist/ReactToastify.css';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount(){
    toast.configure()
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp