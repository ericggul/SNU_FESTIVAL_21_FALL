import React, { useState } from 'react';
import PopupModal from '@F/modal/PopupModal';

const useModal = (ContentComponent, props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalComponent = (
    <PopupModal width={props?.width} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeOnDocumentClick>
      <ContentComponent setIsModalOpen={setIsModalOpen} {...props} />
    </PopupModal>
  );

  return { modalComponent, isModalOpen, setIsModalOpen };
};
export default useModal;
