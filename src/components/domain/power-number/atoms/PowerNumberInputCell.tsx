'use client';

import { useRecoilValue } from 'recoil';

import { InputCell } from '@/components/case/input/atoms/InputCell';

import { useUpdatePowerNumberTable } from '@/stores/power-number-table/operations';
import { powerNumberTableState } from '@/stores/power-number-table/selectors';

interface PowerNumberInputCellProps {
  size?: 'sm' | 'lg';
  indices: [number, number];
  isDisabled?: boolean;
}

export const PowerNumberInputCell = ({
  size = 'sm',
  indices,
  isDisabled = false,
}: PowerNumberInputCellProps) => {
  const [rIndex, cIndex] = indices;
  const powerNumber = useRecoilValue(powerNumberTableState({ rIndex, cIndex }));
  const updatePowerNumberTable = useUpdatePowerNumberTable();
  return (
    <>
      {powerNumber.includes('∞') ? (
        powerNumber
      ) : (
        <InputCell
          size={size}
          indices={indices}
          placeholder="0"
          value={powerNumber}
          isDisabled={isDisabled}
          onChange={updatePowerNumberTable}
        />
      )}
    </>
  );
};
