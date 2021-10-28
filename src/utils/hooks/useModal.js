import React, { useState, useEffect } from 'react';
import PopupModal from '@F/modal/PopupModal';

const useModal = (ContentComponent,
  darkBackground = true,
  listenOpenChange = false,
  props,
  onModalChange) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (listenOpenChange && !isModalOpen) {
      onModalChange();
    }
  }, [listenOpenChange, isModalOpen]);
  const modalComponent = (
    <PopupModal
      width={props?.width}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      darkBackground={darkBackground}
      closeOnDocumentClick
    >
      <ContentComponent setIsModalOpen={setIsModalOpen} {...props} />
    </PopupModal>
  );

  return { modalComponent, isModalOpen, setIsModalOpen };
};
export default useModal;
