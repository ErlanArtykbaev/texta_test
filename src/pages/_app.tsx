import { useEffect, useMemo, VFC, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { useSelector } from 'react-redux';
import { TSToken } from '@typescript-eslint/typescript-estree';
import createCache from '@emotion/cache';

import { HOME_PAGE, SIGN_IN } from 'configuration/urls';
import { EStorageKeys } from 'configuration/types/storageKeys';

import Layout from 'components/Layout';

import { wrapper } from 'store/index';
import { makeSelectAccessToken } from 'store/auth/selectors';

import { getStorageData } from 'utils/storageHelpers';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-medium-zoom.css';
import 'assets/styles/style.css';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
const App: NextPage<AppPropsType, Record<string, unknown> | undefined> = (props) => {
  const { Component: component, pageProps, router: { pathname: propsPathname } } = props;
  const token = useSelector(makeSelectAccessToken);
  const localToken = getStorageData(EStorageKeys.TOKEN) as TSToken;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(
    () => {
      if (token || localToken) {
        if (router.pathname === SIGN_IN) {
          router.push(HOME_PAGE);
        }
      } else {
        router.push(SIGN_IN);
      }

      if (isLoading) {
        setIsLoading(false);
      }
    },
    // Need to call this effect only once at render
    // eslint-disable-next-line
    [],
  );

  const content = useMemo(
    () => {
      const Component = component as VFC;
      if([SIGN_IN].includes(propsPathname))
        return <Component {...pageProps} />;

      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    },
    [propsPathname, component, pageProps]
  );

  return (
        {content}
  );

};

export default wrapper.withRedux(App);
