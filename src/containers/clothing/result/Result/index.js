import React, {
  useState, useEffect, useCallback, useMemo, useRef,
} from 'react';

import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import useInput from '@U/hooks/useInput';
import html2canvas from 'html2canvas';

import Basic from '@I/clothing/basic.png';
import Save from '@I/clothing/save.png';
import Jump from '@I/clothing/jump.png';

import Name from '@C/clothing/result/Name';
import Character from '@C/clothing/result/Character';

import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';

import { CLOTHING_DATA, ACCESSORIES_DATA, BACKGROUND_PALETTES } from '@C/clothing/data';

import { useSelector } from 'react-redux';

import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';

import * as S from './styles';

function Clothing({ theme, user, isAuthorized }) {
  useEffect(() => {
    toast('저장되었습니다!');
  }, []);
  const mission = useMission();
  const hadPlayed = useMemo(() => isAuthorized && mission.clothing.length !== 0, [isAuthorized, mission]);

  // background

  const selectedBackground = useSelector(state => state.mission.background);
  const selectedClothings = useSelector(state => state.mission.clothing);
  const selectedAccessories = useSelector(state => state.mission.accessorie);

  const maxWidth = useMemo(() => 500 / theme.windowWidth, [theme]);
  const [containerSizeUnit, setContainerSizeUnit] = useState(Math.min(0.6, maxWidth));
  const containerWidth = useMemo(() => theme.windowWidth * containerSizeUnit, [containerSizeUnit, theme]);

  // eyebrow visible(=== hair on top)
  const [hairOnTop, setHairOnTop] = useState(true);

  // size converter
  const convert = useCallback((value) => (containerWidth < 500 ? (containerWidth / 375) * value : (500 / 375) * value), [theme, containerWidth]);

  // Jump!
  const [jump, setJump] = useState(false);

  // Name
  const { name, onChangeName } = useInput();

  // capturing clothings
  const characterRef = useRef();
  const [screenShottedCharacter, setScreenShottedCharacter] = useState('');

  const handleSaveClick = useCallback(() => {
    if (characterRef.current) {
      html2canvas(characterRef.current).then(canvas => {
        const url = canvas.toDataURL('image/jpg');
        let link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = '캐릭터.jpg';
        link.click();
        document.body.removeChild(link);
      });
      toast('이미지 다운로드 완료!');
    }
  }, [characterRef, selectedClothings]);

  return (
    <S.StyledClothing background={BACKGROUND_PALETTES[selectedBackground]}>
      <HeaderContent>MY CHARACTER</HeaderContent>
      <S.Content>
        <S.ImageContainer>
          <S.Image onClick={() => setJump(j => !j)} jump={jump} src={Jump} />
          <S.Image onClick={handleSaveClick} src={Save} />
        </S.ImageContainer>
        <S.MidContainer
          ref={characterRef}
          background={BACKGROUND_PALETTES[selectedBackground]}
        >
          <Character containerWidth={containerWidth} jump={jump} />
        </S.MidContainer>
        <Name name={name} onChangeName={onChangeName} />
      </S.Content>
    </S.StyledClothing>
  );
}
export default withTheme(withUser(Clothing));

Clothing.propTypes = {

};
