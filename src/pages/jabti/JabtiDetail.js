import React from 'react';
import PropTypes from 'prop-types';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import JabtiDetailContainer from '@C/jabti/JabtiDetail';
import ResultAchieve from '@I/tarot/result/achieve.png';
import ResultCalm from '@I/tarot/result/calm.png';
import ResultDelight from '@I/tarot/result/delight.png';
import ResultHarmony from '@I/tarot/result/harmony.png';
import ResultImprovement from '@I/tarot/result/improvement.png';
import ResultPassion from '@I/tarot/result/passion.png';
import ResultPleasure from '@I/tarot/result/pleasure.png';
import ResultPrecious from '@I/tarot/result/precious.png';
import ResultRefresh from '@I/tarot/result/refresh.png';
import ResultRomance from '@I/tarot/result/romance.png';
import ResultStressFree from '@I/tarot/result/stress-free.png';
import ResultSympathy from '@I/tarot/result/sympathy.png';

function JabtiDetail({
  resultImage, result, links, color, index,
}) {
  return (
    <>
      <Header />
      <JabtiDetailContainer
        resultImage={resultImage}
        result={result}
        links={links}
        color={color}
        index={index}
      />
    </>
  );
}
export default withMountEvent(JabtiDetail);

JabtiDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  links: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export const Achieve = () => (
  <JabtiDetail
    resultImage={ResultAchieve}
    result="achieve"
    links={{
      name: '인스타그램',
      url: 'instagram',
    }}
    color="red"
    index={0}
  />
);

export const Calm = () => (
  <JabtiDetail
    resultImage={ResultCalm}
    result="calm"
    links={{
      name: '보물찾기',
      url: '/activity/mini/treasure-hunt',
    }}
    color="rgb(24,170,100)"
    index={1}
  />
);

export const Delight = () => (
  <JabtiDetail
    resultImage={ResultDelight}
    result="delight"
    links={{
      name: '공연',
      url: '/performance/phone-cert',
    }}
    color="rgb(124,70,100)"
    index={2}
  />
);

export const Harmony = () => (
  <JabtiDetail
    resultImage={ResultHarmony}
    result="harmony"
    links={{
      name: '미니게임',
      url: '/activity/mini',
    }}
    color="rgb(124,170,200)"
    index={3}
  />
);

export const Improvement = () => (
  <JabtiDetail
    resultImage={ResultImprovement}
    result="improvement"
    links={{
      name: '미궁게임',
      url: '/activity/mini/riddle',
    }}
    color="rgb(200,170,100)"
    index={4}
  />
);

export const Passion = () => (
  <JabtiDetail
    resultImage={ResultPassion}
    result="passion"
    links={{
      name: '미궁게임',
      url: '/activity/mini/riddle',
    }}
    color="rgb(154,200,200)"
    index={5}
  />
);

export const Pleasure = () => (
  <JabtiDetail
    resultImage={ResultPleasure}
    result="pleasure"
    links={{
      name: '인스타그램',
      url: 'instagram',
    }}
    color="rgb(124,100,230)"
    index={6}
  />
);

export const Precious = () => (
  <JabtiDetail
    resultImage={ResultPrecious}
    result="precious"
    links={{
      name: '공연',
      url: '/performance/phone-cert',
    }}
    color="rgb(214,200,100)"
    index={7}
  />
);

export const Refresh = () => (
  <JabtiDetail
    resultImage={ResultRefresh}
    result="refresh"
    links={{
      name: '방명록',
      url: '/guest-book',
    }}
    color="rgb(50,100,200)"
    index={8}
  />
);

export const Romance = () => (
  <JabtiDetail
    resultImage={ResultRomance}
    result="romance"
    links={{
      name: '단체게임',
      url: '/activity/group',
    }}
    color="rgb(224,70,190)"
    index={9}
  />
);

export const StressFree = () => (
  <JabtiDetail
    resultImage={ResultStressFree}
    result="stress-free"
    links={{
      name: '관악게임토너먼트',
      url: '/performance/game-tournament',
    }}
    color="rgb(241,140,100)"
    index={10}
  />
);

export const Sympathy = () => (
  <JabtiDetail
    resultImage={ResultSympathy}
    result="sympathy"
    links={{
      name: '고릴라디오',
      url: '/activity/radio',
    }}
    color="rgb(24,170,210)"
    index={11}
  />
);
