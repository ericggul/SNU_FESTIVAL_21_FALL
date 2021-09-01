import React from 'react';
import PropTypes from 'prop-types';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import JabtiDetailContainer from '@C/jabti/JabtiDetail';
import ResultAchieve from '@I/tarot/result/achieve.png';

import Result1 from '@I/jabti/result/image/1.png';
import Result2 from '@I/jabti/result/image/2.png';
import Result3 from '@I/jabti/result/image/3.png';
import Result4 from '@I/jabti/result/image/4.png';
import Result5 from '@I/jabti/result/image/5.png';
import Result6 from '@I/jabti/result/image/6.png';
import Result7 from '@I/jabti/result/image/7.png';
import Result8 from '@I/jabti/result/image/8.png';
import Result9 from '@I/jabti/result/image/9.png';
import Result10 from '@I/jabti/result/image/10.png';
import Result11 from '@I/jabti/result/image/11.png';
import Result12 from '@I/jabti/result/image/12.png';
import Result13 from '@I/jabti/result/image/13.png';
import Result14 from '@I/jabti/result/image/14.png';
import Result15 from '@I/jabti/result/image/15.png';
import Result16 from '@I/jabti/result/image/16.png';

import ResultText1 from '@I/jabti/result/text/1.png';
import ResultText2 from '@I/jabti/result/text/2.png';
import ResultText3 from '@I/jabti/result/text/3.png';
import ResultText4 from '@I/jabti/result/text/4.png';
import ResultText5 from '@I/jabti/result/text/5.png';
import ResultText6 from '@I/jabti/result/text/6.png';
import ResultText7 from '@I/jabti/result/text/7.png';
import ResultText8 from '@I/jabti/result/text/8.png';
import ResultText9 from '@I/jabti/result/text/9.png';
import ResultText10 from '@I/jabti/result/text/10.png';
import ResultText11 from '@I/jabti/result/text/11.png';
import ResultText12 from '@I/jabti/result/text/12.png';
import ResultText13 from '@I/jabti/result/text/13.png';
import ResultText14 from '@I/jabti/result/text/14.png';
import ResultText15 from '@I/jabti/result/text/15.png';
import ResultText16 from '@I/jabti/result/text/16.png';

function JabtiDetail({
  resultImage, resultTextImage, result, spot, colorCode, colorName, index,
}) {
  return (
    <>
      <JabtiDetailContainer
        resultImage={resultImage}
        resultTextImage={resultTextImage}
        result={result}
        spot={spot}
        colorCode={colorCode}
        colorName={colorName}
        index={index}
      />
    </>
  );
}
export default withMountEvent(JabtiDetail);

JabtiDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

const spots = [
  '테니스장',
  '비비큐 카페',
  '관정 도서관',
  '서울대 정문',
  '제 1 공학관',
  '라운지오',
  '예술계 식당',
  '자하연',
  '운동장',
  '학생 회관',
  '규장각',
  '총장 잔디',
  '농생대',
  '기숙사',
  '사범대',
  '버들골',
];

const capitalizedColorCodes = [
  '#CCFF00',
  '#B31B1B',
  '#DFB376',
  '#C4C3D0',
  '#C19A6B',
  '#9678B6',
  '#FFB7C5',
  '#0ABAB5',
  '#F64A8A',
  '#FFDDCA',
  '#FADA5E',
  '#50C878',
  '#004225',
  '#FF8243',
  '#DF00FF',
  '#93C572',
];
console.log(capitalizedColorCodes);
const convert = (givenArray) => {
  let result = [];
  givenArray.map((e, i) => {
    result.push(e.toLowerCase());
  });
  return result;
};

const colorCodes = convert(capitalizedColorCodes);
console.log(colorCodes[0]);
const colorNames = [
  'Electric Lime',
  'Cornell Red',
  'Gwanjeong Brown',
  'Lavender Gray',
  'Desert',
  'Purple Mountain Majesty',
  'Cherry Blossom Pink',
  'Tiffany Blue',
  'French Rose',
  'Unbleached Silk',
  'Royal Yellow',
  'Emerald',
  'British Racing Green',
  'Mango Tango',
  'Phlox',
  'Pistachio',
];

export const SYBG = () => (
  <JabtiDetail
    resultImage={Result1}
    resultTextImage={ResultText1}
    result="sybg"
    spot={spots[0]}
    colorCode={colorCodes[0]}
    colorName={colorNames[0]}
    index={0}
  />
);

export const SYBT = () => (
  <JabtiDetail
    resultImage={Result2}
    resultTextImage={ResultText2}
    result="sybt"
    spot={spots[1]}
    colorCode={colorCodes[1]}
    colorName={colorNames[1]}
    index={1}
  />
);

export const SYGG = () => (
  <JabtiDetail
    resultImage={Result3}
    resultTextImage={ResultText3}
    result="sygg"
    spot={spots[2]}
    colorCode={colorCodes[2]}
    colorName={colorNames[2]}
    index={2}
  />
);

export const SYGT = () => (
  <JabtiDetail
    resultImage={Result4}
    resultTextImage={ResultText4}
    result="sygt"
    spot={spots[3]}
    colorCode={colorCodes[3]}
    colorName={colorNames[3]}
    index={3}
  />
);

export const SWBG = () => (
  <JabtiDetail
    resultImage={Result5}
    resultTextImage={ResultText5}
    result="swbg"
    spot={spots[4]}
    colorCode={colorCodes[4]}
    colorName={colorNames[4]}
    index={4}
  />
);

export const SWBT = () => (
  <JabtiDetail
    resultImage={Result6}
    resultTextImage={ResultText6}
    result="swbt"
    spot={spots[5]}
    colorCode={colorCodes[5]}
    colorName={colorNames[5]}
    index={5}
  />
);

export const SWGG = () => (
  <JabtiDetail
    resultImage={Result7}
    resultTextImage={ResultText7}
    result="swgg"
    spot={spots[6]}
    colorCode={colorCodes[6]}
    colorName={colorNames[6]}
    index={6}
  />
);

export const SWGT = () => (
  <JabtiDetail
    resultImage={Result8}
    resultTextImage={ResultText8}
    result="swgt"
    spot={spots[7]}
    colorCode={colorCodes[7]}
    colorName={colorNames[7]}
    index={7}
  />
);

export const PYBG = () => (
  <JabtiDetail
    resultImage={Result9}
    resultTextImage={ResultText9}
    result="pybg"
    spot={spots[8]}
    colorCode={colorCodes[8]}
    colorName={colorNames[8]}
    index={8}
  />
);

export const PYBT = () => (
  <JabtiDetail
    resultImage={Result10}
    resultTextImage={ResultText10}
    result="pybt"
    spot={spots[9]}
    colorCode={colorCodes[9]}
    colorName={colorNames[9]}
    index={9}
  />
);

export const PYGG = () => (
  <JabtiDetail
    resultImage={Result11}
    resultTextImage={ResultText11}
    result="pygg"
    spot={spots[10]}
    colorCode={colorCodes[10]}
    colorName={colorNames[10]}
    index={10}
  />
);

export const PYGT = () => (
  <JabtiDetail
    resultImage={Result12}
    resultTextImage={ResultText12}
    result="pygt"
    spot={spots[11]}
    colorCode={colorCodes[11]}
    colorName={colorNames[11]}
    index={11}
  />
);

export const PWBG = () => (
  <JabtiDetail
    resultImage={Result13}
    resultTextImage={ResultText13}
    result="pwbg"
    spot={spots[12]}
    colorCode={colorCodes[12]}
    colorName={colorNames[12]}
    index={12}
  />
);

export const PWBT = () => (
  <JabtiDetail
    resultImage={Result14}
    resultTextImage={ResultText14}
    result="pwbt"
    spot={spots[13]}
    colorCode={colorCodes[13]}
    colorName={colorNames[13]}
    index={13}
  />
);

export const PWGG = () => (
  <JabtiDetail
    resultImage={Result15}
    resultTextImage={ResultText15}
    result="pwgg"
    spot={spots[14]}
    colorCode={colorCodes[14]}
    colorName={colorNames[14]}
    index={14}
  />
);

export const PWGT = () => (
  <JabtiDetail
    resultImage={Result16}
    resultTextImage={ResultText16}
    result="pwgt"
    spot={spots[15]}
    colorCode={colorCodes[15]}
    colorName={colorNames[15]}
    index={15}
  />
);
