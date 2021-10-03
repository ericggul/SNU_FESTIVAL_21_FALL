import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export const transition = { duration: 1.3, ease: [0.43, 0.13, 0.23, 0.96] };

function GridItem({
  url, src, text, i, selected, sendFunction,
}) {
  return (
    <S.GridItem
      onClick={() => sendFunction(url, i)}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: selected === i ? 1 : 0,
      }}
      transition={{
        ...transition,
        delay: (i + 1) * 0.3,
      }}
    >
      <S.ImageContainer>
        <S.IconImage
          src={src}
        />
      </S.ImageContainer>
      <S.IconDescription shine={selected === i}>
        {text}
      </S.IconDescription>
    </S.GridItem>
  );
}
export default GridItem;

GridItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  i: PropTypes.number,
};
