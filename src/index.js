import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

/** css import */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'reactjs-popup/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { initializeGA } from '@U/initializer/googleAnalytics';
import reduxRoot from '@/redux/common/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeKakao } from '@U/initializer/kakao';

initializeGA();
initializeKakao();

// noinspection JSCheckFunctionSignatures
ReactDOM.render(
  <Provider store={reduxRoot.store}>
    <PersistGate loading={<p>Redux 로딩중 ...</p>} persistor={reduxRoot.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
