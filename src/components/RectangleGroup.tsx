import React from 'react';
import { Rectangle } from './Rectangle';
import { RectangleInfo } from '../utils/types';
import { generateRectangleInfoList } from '../utils/utils';
import { useEffect, useState } from 'react';
import '../styles/RectangleGroup.css';

export const RectangleGroup: React.FC = () => {
  const [rectangleInfoList, setRectangleInfoList] = useState<Array<RectangleInfo>>(generateRectangleInfoList());
  const [mode, setMode] = useState<string>('computer');

  const handleColorChange = () => {
    setRectangleInfoList(generateRectangleInfoList());
  };

  const handleResize = () => {
    if (window.innerWidth <= 600) setMode('phone');
    else setMode('computer');
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`rectangle-group ${mode}-rectangle-group`}>
      {rectangleInfoList.map((rectangleInfo) => (
        <Rectangle onColorChange={handleColorChange} mode={mode} rectangleInfo={rectangleInfo} />
      ))}
    </div>
  );
};
