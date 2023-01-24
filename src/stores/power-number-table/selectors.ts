import { selectorFamily } from 'recoil';

import { powerNumberTableAtom } from '@/stores/power-number-table/atoms';

export const powerNumberTableState = selectorFamily<
  string,
  { rIndex: number; cIndex: number }
>({
  key: 'power-number-table-state',
  get:
    ({ rIndex, cIndex }) =>
    ({ get }) => {
      const powerNumber = get(powerNumberTableAtom({ rIndex, cIndex }));
      return powerNumber;
    },
});
