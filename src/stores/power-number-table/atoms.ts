import { atomFamily } from 'recoil';

import type { PowerNumberTableAtomParameter } from '@/stores/power-number-table/types';

import { powerNumberTable } from '@/utils/poker/powerNumber';

export const powerNumberTableAtom = atomFamily<
  string,
  PowerNumberTableAtomParameter
>({
  key: 'power-number-table',
  default: ({ rIndex, cIndex }) => {
    const powerNumber = powerNumberTable[rIndex]?.[cIndex];
    if (!powerNumber) return '';
    if (powerNumber === Infinity) return '∞';
    if (powerNumber === -Infinity) return '-∞';
    return '';
  },
});
