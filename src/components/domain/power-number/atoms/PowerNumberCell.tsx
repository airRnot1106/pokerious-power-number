import { powerNumberTable } from '@/utils/poker/powerNumber';

interface PowerNumberCellProps {
  size?: 'sm' | 'lg';
  indices: [number, number];
}

export const PowerNumberCell = ({
  size = 'sm',
  indices,
}: PowerNumberCellProps) => {
  const [rIndex, cIndex] = indices;
  const powerNumber = (() => {
    const powerNumber = powerNumberTable[rIndex]?.[cIndex];
    if (powerNumber === undefined) return '';
    if (powerNumber === Infinity) return '∞';
    if (powerNumber === -Infinity) return '-∞';
    return `${powerNumber}`;
  })();
  return (
    <p
      className={
        'm-0 flex items-center justify-center p-0 text-xs font-bold ' +
        (size === 'lg' ? 'h-10 w-10' : 'h-6 w-6')
      }
    >
      {powerNumber}
    </p>
  );
};
