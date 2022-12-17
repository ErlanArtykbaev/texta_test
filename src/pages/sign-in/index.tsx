import Head from 'next/head';
import { NextPage } from 'next';

import { SITE_TITLE } from 'configuration/common';

import SignIn from 'containers/SignIn';


const SignInPage: NextPage = () => (
  <>
    <Head>
      <title>Вход | {SITE_TITLE}</title>
    </Head>
    <SignIn />
  </>
);

export default SignInPage;
