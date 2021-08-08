import React from 'react';
import PropTypes from 'prop-types';
import Universe from '@I/tarot/universe.jpg';
import StarCluster from '@I/tarot/start-cluster.png';
import ConstellationOne from '@I/tarot/constellation-1.png';
import ConstellationTwo from '@I/tarot/constellation-2.png';
import ConstellationThree from '@I/tarot/constellation-3.png';
import FBackground from '@F/layout/Background';
import * as S from '../Tarot/styles';

function Background({ isMobile }) {
  return (
    <>
      <FBackground image={Universe} alt="" />
      <S.Images position="fixed">
        <S.Image src={StarCluster} alt="" width={isMobile ? 80 : 40} top={21} flicker rotate duration={3} />
        <S.Image src={ConstellationOne} alt="" width={isMobile ? 30 : 15} top={isMobile ? 15 : 17} right={35} flicker rotate duration={2} />
        <S.Image src={ConstellationTwo} alt="" width={isMobile ? 30 : 15} top={isMobile ? 31 : 41} right={isMobile ? 10 : 25} flicker duration={7} />
        <S.Image src={ConstellationThree} alt="" width={isMobile ? 30 : 15} top={31} left={isMobile ? 5 : 20} flicker duration={3.5} />

        <S.Image src={StarCluster} alt="" width={isMobile ? 60 : 20} top={110} flicker reverse rotate duration={2.5} />
        <S.Image src={ConstellationTwo} alt="" width={isMobile ? 20 : 10} top={isMobile ? 100 : 102} left={20} flicker reverse duration={4} />
        <S.Image src={ConstellationThree} alt="" width={isMobile ? 30 : 15} top={isMobile ? 111 : 121} right={isMobile ? 10 : 25} flicker reverse duration={9} />
      </S.Images>
    </>
  );
}
export default Background;

Background.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
