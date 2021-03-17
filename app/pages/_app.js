import App from 'next/app';
import React from 'react';
import accepts from 'accepts';
import { ThemeProvider, theme } from '@livipdev/core/styles';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import 'react-awesome-slider/dist/styles.css';
import '@brainhubeu/react-carousel/lib/style.css';
import { CustomCss } from '../public/static/assets/style/css/custom.css'
import 'typeface-montserrat';

const cache = createIntlCache();
const supportedLanguages = ['pt-BR'];

const getLocale = async ctx => {
  //const accept = accepts(ctx.req);
  const locale = 'pt-BR';
  
  //const locale = accept.language(supportedLanguages) || process.env.DEFAULT_LOCALE;
  
  

  return locale;
};

const getMessages = async locale => {
  return require(`../lang/${locale}.json`);
};

export default class TravelApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const locale = await getLocale(ctx)
    const messages = await getMessages(locale)

    return { pageProps, locale, messages };
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;
    const intl = createIntl(
      {
        locale,
        messages,
      },
      cache,
    );

    return (
      <RawIntlProvider value={intl}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RawIntlProvider>
    );
  }
}
