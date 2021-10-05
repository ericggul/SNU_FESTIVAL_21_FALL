import React, { useState } from 'react';
import FullScreen from './index';

export default {
  title: 'foundations/FullScreen',
};

function FullScreenWrapper() {
  const [isFullScreen, setIsFullScreen] = useState(true);

  return (
    <FullScreen
      isFullScreen={isFullScreen}
      onCloseFullScreen={() => setIsFullScreen(false)}
    />
  );
}

export const Default = () => <FullScreenWrapper />;
