import React, { Suspense, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle, theme } from '@S/index';

import Toast from '@F/Toast';
import styled, { ThemeProvider } from 'styled-components';
import useResize from '@U/hooks/useResize';
import LoadingMascot from '@F/loading/LoadingMascot';
import PageLoading from '@F/loading/PageLoading';
import { FlexCenterStyle } from '@S/responsive/display';
import NotFound from '@/pages/NotFound';
import { GA_TRACKING_KEY } from '@/config';
import GaAnalytics from '@/UserAnalytics';
import routes from '@/routes';

function App() {
  useEffect(() => {
    console.log('또 열어봤네!!❣ 실례가 안 된다면 콘솔 닫고 방명록 하나만 남겨주십시오😇');
  }, []);

  const [windowWidth, windowHeight] = useResize();
  const themeWithWindowSize = useMemo(() => ({ ...theme, windowHeight, windowWidth }), [windowHeight, windowWidth]);

  return (
    <ThemeProvider theme={themeWithWindowSize}>
      <GlobalStyle />

      <Toast />

      <Router>
        <Suspense
          fallback={<LoadingWrapper height={windowHeight}><PageLoading /></LoadingWrapper>}
        >
          <Switch>
            { routes.map((route) => (
              <Route
                exact={route.exact}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            )) }
            <Route component={NotFound} />
          </Switch>
        </Suspense>

        { GA_TRACKING_KEY && <GaAnalytics /> }
      </Router>
    </ThemeProvider>
  );
}
export default App;

const LoadingWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  ${FlexCenterStyle};
`;
