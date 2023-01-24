import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { useResetPowerNumberTable } from '@/stores/power-number-table/operations';
import { powerNumberTableState } from '@/stores/power-number-table/selectors';

import { powerNumberTable } from '@/utils/poker/powerNumber';

const correctPowerNumberTable = powerNumberTable.map((row) =>
  row.map((cell) => {
    if (cell === Infinity) return '∞';
    if (cell === -Infinity) return '-∞';
    return `${cell}`;
  })
);

export const usePowerNumberTable = () => {
  const [score, setScore] = useState(0);

  const yourPowerNumberTable = useRecoilValue(powerNumberTableState);

  const resetPowerNumberTable = useResetPowerNumberTable();

  useEffect(() => {
    let score = 0;
    yourPowerNumberTable.forEach((row, rIndex) => {
      row.forEach((answer, cIndex) => {
        if (answer === '∞' || answer === '-∞') return;
        if (answer === correctPowerNumberTable[rIndex]?.[cIndex]) score += 1;
      });
    });
    setScore(score);
  }, [yourPowerNumberTable]);

  return [score, resetPowerNumberTable] as const;
};
