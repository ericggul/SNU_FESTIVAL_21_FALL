import React, { useEffect } from 'react';

function withMountEvent(InputComponent) {
  return function ResultComponent(props) {
    useEffect(() => {
      // 스크롤 최상단으로
      window.scrollTo(0, 0);
    }, []);

    return <InputComponent {...props} />;
  };
}
export default withMountEvent;
