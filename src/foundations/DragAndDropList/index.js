import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function DragAndDropList({ originalList, handleChangedList }) {
  const [changedList, setChangedList] = useState(originalList);
  const draggingItem = useRef();
  const draggingOver = useRef();

  const handleDragStart = useCallback((e, pos) => {
    draggingItem.current = pos;
  }, []);

  const handleDragEnter = useCallback((e, pos) => {
    draggingOver.current = pos;
    let listCopy = [...changedList];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(draggingOver.current, 0, draggingItemContent);

    draggingItem.current = draggingOver.current;
    draggingOver.current = null;
    setChangedList(listCopy);
    handleChangedList(listCopy);
  }, []);

  console.log(changedList);

  return (
    <S.List>
      {changedList.map((el, i) => (
        <S.Element
          onDragStart={(e) => handleDragStart(e, i)}
          onDragEnter={(e) => handleDragEnter(e, i)}
          onTouchStart={(e) => handleDragStart(e, i)}
          onTouchEnd={(e) => handleDragEnter(e, i)}
          key={i}
          draggable
        >
          {el}
        </S.Element>
      ))}
    </S.List>
  );
}
export default DragAndDropList;

DragAndDropList.propTypes = {

};
