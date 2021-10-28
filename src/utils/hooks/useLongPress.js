import React, { useCallback, useRef, useState } from 'react';

const useLongPress = (onLongPress, onClick, { shouldPreventDefault = true, delay = 30 } = {}) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback((event) => {
    if (shouldPreventDefault && event.target) {
      event.target.addEventListener('touchend', preventDefault, {
        passive: false,
      });
      target.current = event.target;
    }
    timeout.current = setTimeout(() => {
      onLongPress(event);
      setLongPressTriggered(true);
    }, delay);
  }, [shouldPreventDefault, onClick, longPressTriggered]);

  const clear = useCallback((event, shouldTriggerClick = true) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (shouldTriggerClick && !longPressTriggered) {
      onClick();
    }
    setLongPressTriggered(false);
    if (shouldPreventDefault && target.current) {
      target.current.removeEventListener('touchend', preventDefault);
    }
  }, [shouldPreventDefault, onClick, longPressTriggered]);

  return {
    onMouseDown: e => start(e),
    onTouchStart: e => start(e),
    onMouseUp: e => start(e),
    onMouseLeave: e => clear(e, false),
    onTouchEnd: e => clear(e),
  };
};

const isTouchEvent = (event) => 'touches' in event;

const preventDefault = (event) => {
  if (!isTouchEvent(event)) return;
  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongPress;
