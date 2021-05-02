import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '@U/hooks/useInput';
import { sha256 } from 'js-sha256';
import { toast } from 'react-toastify';
import * as S from './styles';

const answers = [
  '07436abdfc015b3d6e7f6236e4817639b24bfb77e68adfb779ace94e8d08c047',
  '07436abdfc015b3d6e7f6236e4817639b24bfb77e68adfb779ace94e8d08c047',
  '07436abdfc015b3d6e7f6236e4817639b24bfb77e68adfb779ace94e8d08c047',
];

function QuestionBox({ answerColor }) {
  const [step, setStep] = useState(0);
  const { value, onChange } = useInput('');

  const goToNextStep = () => {
    setStep(step + 1);

    const element = document.querySelector('.QuestionImage');
    element.style.display = 'none';
    const triggerReflow = element.offsetWidth;
    element.style.display = 'block';
  };

  const clear = () => {

  };

  const submit = () => {
    if (sha256(value) === answers[step]) {
      if (step < 2) {
        toast('정답입니다🎉');
        goToNextStep();
      } else {
        clear();
      }
    } else {
      toast('오답입니다😅');
    }
  };

  return (
    <S.Content>
      <S.Question className="QuestionImage" />
      <S.Answer>
        <S.InputBox value={value} onChange={onChange} color={answerColor} placeholder="힌트는 내일 공개됩니다." />
        <S.Button onClick={submit}>등록</S.Button>
      </S.Answer>
    </S.Content>
  );
}
export default QuestionBox;

QuestionBox.propTypes = {
  answerColor: PropTypes.string,
};

QuestionBox.defaultProps = {
  answerColor: null,
};
