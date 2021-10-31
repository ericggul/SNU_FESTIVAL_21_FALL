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

import Name from '@C/clothing/Name';

import { preloadImage } from '@U/functions/preload';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';

import { CLOTHING_DATA, ACCESSORIES_DATA, BACKGROUND_PALETTES } from '@C/clothing/data';

import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
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
  const [containerSizeUnit, setContainerSizeUnit] = useState(Math.min(0.7, maxWidth));
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
        link.download = `${name}.jpg`;
        link.click();
        document.body.removeChild(link);
      });
      toast('이미지 다운로드 완료!');
    }
  }, [characterRef, name, selectedClothings]);

  return (
    <S.StyledClothing background={BACKGROUND_PALETTES[selectedBackground]}>
      <HeaderContent>MY CHARACTER</HeaderContent>
      <S.Content>
        <S.ImageContainer>
          <S.Image onClick={() => setJump(j => !j)} jump={jump} src={Jump} />
          <S.Image onClick={handleSaveClick} src={Save} />
        </S.ImageContainer>
        <S.MidContainer ref={characterRef} background={BACKGROUND_PALETTES[selectedBackground]}>
          <S.Container width={Math.min(containerWidth, 500)} jump={jump}>
            <S.Body src={Basic} top={convert(-12)} left={convert(0)} width={convert(375)} />
            <S.Element
              src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[0].english}/${selectedClothings[0] + 1}.png`}
              top={convert(CLOTHING_DATA[0].yPos)}
              left={convert(CLOTHING_DATA[0].xPos)}
              width={convert(CLOTHING_DATA[0].width)}
              zIndexOnTop={hairOnTop}
            />
            {selectedClothings.slice(1).map((sl, pr) => (
              <S.Element
                src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[pr + 1].english}/${sl + 1}.png`}
                top={convert(CLOTHING_DATA[pr + 1].yPos)}
                left={convert(CLOTHING_DATA[pr + 1].xPos)}
                width={convert(CLOTHING_DATA[pr + 1].width)}
                key={pr + 1}
              />
            ))}
            {selectedAccessories.map((sl, i) => (
              (
                <S.Element
                  src={`https://snufestival.com/images/clothing/${ACCESSORIES_DATA.english}/${sl + 1}.png`}
                  top={convert(ACCESSORIES_DATA.yPos)}
                  left={convert(ACCESSORIES_DATA.xPos)}
                  width={convert(ACCESSORIES_DATA.width)}
                  key={i}
                />
              )
            ))}
          </S.Container>
          <Name name={name} onChangeName={onChangeName} />
        </S.MidContainer>
      </S.Content>
    </S.StyledClothing>
  );
}
export default withTheme(withUser(Clothing));

Clothing.propTypes = {

};
