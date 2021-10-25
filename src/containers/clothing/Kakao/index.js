import React, { useState, useEffect, useCallback } from 'react';
import KakaoIcon from '@I/icon/kakao.svg';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as S from './styles';

function Kakao({ onClick, url }) {
  const [waitingForCapture, setWaitingForCapture] = useState(false);

  console.log(url);
  useEffect(() => {
    if (waitingForCapture && url) {
      uploadImgur();
    }
  }, [waitingForCapture, url]);

  const CLIENT_ID = '720aa705557ed64';

  const [shareImg, setShareImg] = useState('');

  const uploadImgur = useCallback(() => {
    const apiBase = 'https://api.imgur.com/3/image';
    axios.post(apiBase, {
      image: url,
      type: 'base64',
    }, {
      headers: {
        Authorization: `Client-ID${CLIENT_ID}`,
      },
    }).then(res => {
      setShareImg(res.data.data.link);
    }).catch(e => {
      console.log(e);
    });
  }, []);

  const shareThroughKakao = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 64100,
      templateArgs: {
        imageUrl: url,
      },
    });
    setWaitingForCapture(false);
    // EventBehavior('Tarot', 'Click Tarot Kakao Share', `share ${result} by kakao`);
  }, []);

  const handleClick = useCallback(() => {
    console.log('clicked!');
    setWaitingForCapture(true);
    onClick();
  }, []);

  return (
    <S.KakaoShare onClick={() => handleClick()}>
      <img src={KakaoIcon} alt="카카오 공유" />
    </S.KakaoShare>
  );
}
export default Kakao;

Kakao.propTypes = {

};
