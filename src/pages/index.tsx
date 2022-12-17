import Head from 'next/head';
import { NextPage } from 'next';

import { SITE_TITLE } from 'configuration/common';

import Main from 'containers/MainPage';


const MainPage: NextPage = () => (
  <>
    <Head>
      <title>Главная | {SITE_TITLE}</title>
    </Head>
    <Main />
  </>
);

export default MainPage;
