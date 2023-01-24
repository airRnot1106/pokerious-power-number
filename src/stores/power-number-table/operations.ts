import { useRecoilCallback } from 'recoil';

import { powerNumberTableAtom } from '@/stores/power-number-table/atoms';

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
