import React, { useState } from 'react';
import PopupAlert from '@F/alert/PopupAlert';

const useAlert = (ContentComponent, props) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const alertComponent = (
    <PopupAlert width={props?.width} isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} closeOnDocumentClick>
      <ContentComponent setIsAlertOpen={setIsAlertOpen} {...props} />
    </PopupAlert>
  );

  return { alertComponent, isAlertOpen, setIsAlertOpen };
};
export default useAlert;
