import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

type btnTypes = 'filled' | 'outline';

interface CustomButtonProps {
  title: string;
  type: btnTypes;
  customStyles: string;
  handleClick: () => void;
}

const CustomButton = ({
  title,
  type,
  customStyles = '',
  handleClick,
}: CustomButtonProps) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: string) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
  };
  return (
    <button
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
