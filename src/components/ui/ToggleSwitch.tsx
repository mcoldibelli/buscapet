import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

interface SliderProps { checked: boolean; }

const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => (checked ? theme.colors.primary : theme.colors.secondary)};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 22.5px;
    width: 22.5px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({ checked }) => (checked ? "translateX(26px)" : "translateX(0)")};
  }
`;

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SwitchContainer>
      <SwitchLabel>
        <SwitchInput type="checkbox" checked={isChecked} onChange={handleToggle} />
        <Slider checked={isChecked} />
      </SwitchLabel>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
