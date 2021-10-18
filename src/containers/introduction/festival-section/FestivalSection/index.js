import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import BasicInfoSection from '@C/introduction/festival-section/BasicInfoSection';
import PromotionVideoSection from '@C/introduction/festival-section/PromotionVideoSection';
import PublisherSection from '@C/introduction/festival-section/PublisherSection';
import Lumination2 from '@F/animation/Lumination/Lumination2';

// Mission
import {
  Light4,
} from '@F/Light';
import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';
import useModal from '@U/hooks/useModal';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';

import * as S from './styles';

function FestivalSection({ isMobile, user, isAuthorized }) {
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 4;

  const onModalChange = useCallback(() => {
    setSustainLightTemp(false);
  }, []);
  const { modalComponent: lightModalComponent, setIsModalOpen: setIsLightModalOpen } = useModal(LightMissionGuide, false, true,
    {
      pageIndicator: PAGE_LIGHT_INDICATOR,
    }, onModalChange);
  useEffect(() => {
    // Doing Mission and not founded
    if (isAuthorized && mission.light) {
      if (!mission.light[PAGE_LIGHT_INDICATOR]) {
        setLightVisible(true);
      } else if (sustainLightTemp) {
        setLightVisible(true);
      } else {
        setLightVisible(false);
      }
    } else {
      setLightVisible(true);
    }
  }, [isAuthorized, mission, setIsLightModalOpen, sustainLightTemp]);

  const lightMissionClick = useCallback(() => {
    setSustainLightTemp(true);
    setIsLightModalOpen(true);
  }, [isAuthorized, mission, lightVisible]);

  /// //////////////////////////

  return (
    <S.StyledFestivalSection>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      <BasicInfoSection isMobile={isMobile} />
      <PromotionVideoSection />
      <PublisherSection />

      <Light4 top={400} left={0} handleClick={lightMissionClick} />

      {lightModalComponent}
    </S.StyledFestivalSection>
  );
}
export default withUser(FestivalSection);

FestivalSection.propTypes = {
  isMobile: PropTypes.bool,
};

FestivalSection.defaultProps = {
  isMobile: false,
};
