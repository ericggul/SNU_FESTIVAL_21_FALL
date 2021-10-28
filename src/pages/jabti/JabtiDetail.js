import React from 'react';
import PropTypes from 'prop-types';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
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
import JabtiDetailContainer from '@/containers/jabti/detail/JabtiDetail';

function JabtiDetail({
  resultImage, resultTextImage, result, bestResult, worstResult, description, spot, colorCode, colorName, index,
}) {
  return (
    <>
      <JabtiDetailContainer
        resultImage={resultImage}
        resultTextImage={resultTextImage}
        result={result}
        bestResult={bestResult}
        worstResult={worstResult}
        description={description}
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

const descriptions = [
  '순살의 유연함을 지닌 그대여, // 빡세게 테니스를 치며 땀 흘리는 모습에 전전  전율이 찌릿!>< // 운동 끝나고 같이 걸어가자~',
  '양념치킨 택시 뽑았다! 널 데리러 가. // Baby let’s ride 빨리 나와 Skkkkkkkkkrt // 어서타 달리자 어디든 괜찮아',
  '아침부터 관정에서 빡공한 그대에게 드리는 선물! // 아이스크림 보러 갈래? 별 먹으러 갈래? // 관정 옥상으로!',
  '있잖아, 나 궁금한게 있는데... // 샤대축제의 열기가 얼마나 후끈하길래 관악구에 폭염주의보가 내려진걸까? …',
  '누군가 공학의 미래를 묻거든, 고개를 들어 저 사막 위의 301을 보게 하라. // 학생들의 밤샘 실험에 감탄한 나머지 하늘에서도 단비를 선사해 주는구나.',
  ' Dear majesty, // please bring an umbrella when catching a cab on a rainy day. // Sincerely, snufestival.',
  '비 오는 우중충한 날 머리에 꽃 하나 꽂고 // 가벼운 발걸음으로 노래 한곡 어떠세요? // 천둥이 ㅊ..ㅣ이이이이이이이으으으으으아아아아ㅏㅏㄱ',
  '길을 잃었다 어딜 가야 할까 // 열두 개로 갈린 조각난 골목길 어딜 가면 너를 다시 만날까 // 운명으로 친다면, 내 운명을 고르자면 축제로 오면 됨 // 순살 체형 커버에는 노란신 ',
  '닭다리뼈는 20kg, french rose는 20kg, 같이 들면 60kg // 20+20=60',
  '거울아 거울아 이 세상에서 누가 제일 예쁘니? // 축방이요 // 정답을 맞힌 너에게 치킨을 (축)하사하노라',
  '책상에 너무 오래 앉아있어 뼈만 앙상하게 남은 그대여, // 공부는 잠시 쉬어도 좋으니 가벼운 마음으로 축제에  참여해 보는 건 어떤가?',
  '먹으면서도 운동하겠다고 순살 대신 뼈를 선택하고... 닭다리 돌리면서 줄넘기하는 당신… // 그런다고 살 안 찔 것 같아? // 포기해',
  '비가 쏟아져도 그대의 운동 본능은 일절 꺾일 줄 모르는구려. // 그렇게 운동이 좋으면 축제도 걸어서, 아니 뛰어서 오너라.',
  '목적지까지 10분. 숄더프레스 5세트 가능이다. 우선 신발을 벗고 코어를 안정화 시킨다. 이 아령과 택시라면 어깨 세트도 다행히 마무리 지을 수 있다.',
  '그니까 치킨도 사줬는데... 세 명 중 한 명은 나 우산 같이 씌워줄 줄 알았는데... 메모지 다 젖겠네... 순살 말고 뼈로 사줘서 그런가... 젠장...이게 교생인가',
  '그니까... 축장님이 이거 들고 서있으라고 시켰는데... 다들 어디간거지?? 축장님? 축..장님? // 아 치킨 먹고싶다.. 치킨은 뼈지...',
];

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

const convert = (givenArray) => {
  let result = [];
  givenArray.map((e, i) => {
    result.push(e.toLowerCase());
  });
  return result;
};

export const colorCodes = convert(capitalizedColorCodes);

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
  <>
    <Header />
    <JabtiDetail
      resultImage={Result1}
      resultTextImage={ResultText1}
      result="sybg"
      bestResult="swgg"
      worstResult="pwgt"
      description={descriptions[0]}
      spot={spots[0]}
      colorCode={colorCodes[0]}
      colorName={colorNames[0]}
      index={0}
    />
  </>
);

export const SYBT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result2}
      resultTextImage={ResultText2}
      result="sybt"
      bestResult="swgt"
      worstResult="pwgg"
      description={descriptions[1]}
      spot={spots[1]}
      colorCode={colorCodes[1]}
      colorName={colorNames[1]}
      index={1}
    />
  </>
);

export const SYGG = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result3}
      resultTextImage={ResultText3}
      result="sygg"
      bestResult="swbg"
      worstResult="pwbt"
      description={descriptions[2]}
      spot={spots[2]}
      colorCode={colorCodes[2]}
      colorName={colorNames[2]}
      index={2}
    />
  </>
);

export const SYGT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result4}
      resultTextImage={ResultText4}
      result="sygt"
      bestResult="pwgt"
      worstResult="pwbg"
      description={descriptions[3]}
      spot={spots[3]}
      colorCode={colorCodes[3]}
      colorName={colorNames[3]}
      index={3}
    />
  </>
);

export const SWBG = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result5}
      resultTextImage={ResultText5}
      result="swbg"
      bestResult="sygg"
      worstResult="pygt"
      description={descriptions[4]}
      spot={spots[4]}
      colorCode={colorCodes[4]}
      colorName={colorNames[4]}
      index={4}
    />
  </>
);

export const SWBT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result6}
      resultTextImage={ResultText6}
      result="swbt"
      bestResult="sygg"
      worstResult="pygt"
      description={descriptions[5]}
      spot={spots[5]}
      colorCode={colorCodes[5]}
      colorName={colorNames[5]}
      index={5}
    />
  </>
);

export const SWGG = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result7}
      resultTextImage={ResultText7}
      result="swgg"
      bestResult="sybg"
      worstResult="pybt"
      description={descriptions[6]}
      spot={spots[6]}
      colorCode={colorCodes[6]}
      colorName={colorNames[6]}
      index={6}
    />
  </>
);

export const SWGT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result8}
      resultTextImage={ResultText8}
      result="swgt"
      bestResult="sybt"
      worstResult="pybg"
      description={descriptions[7]}
      spot={spots[7]}
      colorCode={colorCodes[7]}
      colorName={colorNames[7]}
      index={7}
    />
  </>
);

export const PYBG = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result9}
      resultTextImage={ResultText9}
      result="pybg"
      bestResult="pygt"
      worstResult="swgt"
      description={descriptions[8]}
      spot={spots[8]}
      colorCode={colorCodes[8]}
      colorName={colorNames[8]}
      index={8}
    />
  </>
);

export const PYBT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result10}
      resultTextImage={ResultText10}
      result="pybt"
      bestResult="pwbt"
      worstResult="swgg"
      description={descriptions[9]}
      spot={spots[9]}
      colorCode={colorCodes[9]}
      colorName={colorNames[9]}
      index={9}
    />
  </>
);

export const PYGG = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result11}
      resultTextImage={ResultText11}
      result="pygg"
      bestResult="pybg"
      worstResult="swbt"
      description={descriptions[10]}
      spot={spots[10]}
      colorCode={colorCodes[10]}
      colorName={colorNames[10]}
      index={10}
    />
  </>
);

export const PYGT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result12}
      resultTextImage={ResultText12}
      result="pygt"
      bestResult="pybg"
      worstResult="swbg"
      description={descriptions[11]}
      spot={spots[11]}
      colorCode={colorCodes[11]}
      colorName={colorNames[11]}
      index={11}
    />
  </>
);

export const PWBG = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result13}
      resultTextImage={ResultText13}
      result="pwbg"
      bestResult="pygg"
      worstResult="sygt"
      description={descriptions[12]}
      spot={spots[12]}
      colorCode={colorCodes[12]}
      colorName={colorNames[12]}
      index={12}
    />
  </>
);

export const PWBT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result14}
      resultTextImage={ResultText14}
      result="pwbt"
      bestResult="pybt"
      worstResult="sygg"
      description={descriptions[13]}
      spot={spots[13]}
      colorCode={colorCodes[13]}
      colorName={colorNames[13]}
      index={13}
    />
  </>
);

export const PWGG = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result15}
      resultTextImage={ResultText15}
      result="pwgg"
      bestResult="swbt"
      worstResult="sybt"
      description={descriptions[14]}
      spot={spots[14]}
      colorCode={colorCodes[14]}
      colorName={colorNames[14]}
      index={14}
    />
  </>
);

export const PWGT = () => (
  <>
    <Header />
    <JabtiDetail
      resultImage={Result16}
      resultTextImage={ResultText16}
      result="pwgt"
      bestResult="sygt"
      worstResult="sybg"
      description={descriptions[15]}
      spot={spots[15]}
      colorCode={colorCodes[15]}
      colorName={colorNames[15]}
      index={15}
    />
  </>
);
