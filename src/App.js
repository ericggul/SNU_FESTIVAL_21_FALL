import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '@/routes';
import GaAnalytics from '@/UserAnalytics';
import { GA_TRACKING_KEY } from '@/config';
import { GlobalStyle } from '@S/index';
import Header from '@F/Header';
import LottieLoadingPacMan from '@F/lottie/LottieLoadingPackman';
import Lottie404 from '@F/lottie/Lottie404';
import MouseTrail from '@F/MouseTrail';

function App() {
  useEffect(() => {
    console.log('아이고 사장님~!!~! 또 열어봤네!❣ 실례가 안된다면 콘솔 닫고 방명록 하나만 남겨주십시오😇 사랑합니다❥ 건강하시구요');
  }, []);

  return (
    <>
      <GlobalStyle />
      <MouseTrail />

      <Router>
        <Suspense fallback={<LottieLoadingPacMan />}>
          <Header />
          <Switch>
            { routes.map((route) => (
              <Route exact key={route.path} path={route.path} component={route.component} />
            )) }
            <Route component={Lottie404} />
          </Switch>
        </Suspense>

        { GA_TRACKING_KEY && <GaAnalytics /> }
      </Router>
    </>
  );
}
export default App;
