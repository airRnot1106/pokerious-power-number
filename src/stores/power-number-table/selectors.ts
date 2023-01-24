import { selector, selectorFamily } from 'recoil';

import { powerNumberTableAtom } from '@/stores/power-number-table/atoms';

import { powerNumberTable } from '@/utils/poker/powerNumber';

export const powerNumberTableCellState = selectorFamily<
  string,
  { rIndex: number; cIndex: number }
>({
  key: 'power-number-table-cell-state',
  get:
    ({ rIndex, cIndex }) =>
    ({ get }) => {
      const powerNumber = get(powerNumberTableAtom({ rIndex, cIndex }));
      return powerNumber;
    },
});

export const powerNumberTableState = selector({
  key: 'power-number-table-state',
  get: ({ get }) => {
    const keys = Object.keys(powerNumberTable);
    const table = keys.map((_, rIndex) => {
      return keys.map((_, cIndex) => {
        return get(powerNumberTableCellState({ rIndex, cIndex }));
      });
    });
    return table;
  },
});
