import { useRecoilCallback } from 'recoil';

import { powerNumberTableAtom } from '@/stores/power-number-table/atoms';

import { powerNumberTable } from '@/utils/poker/powerNumber';

export const useUpdatePowerNumberTable = () =>
  useRecoilCallback(
    ({ set }) =>
      (indices: [number, number], newValue: string) => {
        set(
          powerNumberTableAtom({ rIndex: indices[0], cIndex: indices[1] }),
          (prev) => {
            if (newValue === '') return newValue;
            if (!newValue.match(/^[1-9][0-9]*$/)) return prev;
            if (newValue.length > 2) {
              newValue = newValue.slice(0, 2);
            }
            return newValue;
          }
        );
      }
  );

export const useResetPowerNumberTable = () =>
  useRecoilCallback(({ set }) => () => {
    const keys = Object.keys(powerNumberTable);
    keys.forEach((_, rIndex) => {
      keys.forEach((_, cIndex) => {
        const defaultValue = (() => {
          const powerNumber = powerNumberTable[rIndex]?.[cIndex];
          if (!powerNumber) return '';
          if (powerNumber === Infinity) return '∞';
          if (powerNumber === -Infinity) return '-∞';
          return '';
        })();
        set(powerNumberTableAtom({ rIndex, cIndex }), (_prev) => defaultValue);
      });
    });
  });
