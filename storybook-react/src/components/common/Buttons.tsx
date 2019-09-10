import * as React from 'react';
import styled from 'styled-components';

const ButtonsBlock = styled.div``;
interface ButtonsProps {
  style?: any;
  label: string;
  onClick: () => void;
}

const Buttons: React.SFC<ButtonsProps> = ({ style, label, onClick }) => {
  return (
    <ButtonsBlock>
      <button onClick={onClick} style={style}>
        {label && <span>{label}</span>}
      </button>
    </ButtonsBlock>
  );
};

export default Buttons;
