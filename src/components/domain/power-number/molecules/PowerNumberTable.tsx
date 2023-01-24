import { Table } from '@/components/base/molecules/Table';
import { PowerNumberCell } from '@/components/domain/power-number/atoms/PowerNumberCell';

import { PlayingCard } from '@/utils/poker/playingCard';
import { powerNumberTable } from '@/utils/poker/powerNumber';

interface PowerNumberTableProps {
  size?: 'sm' | 'lg';
}

export const PowerNumberTable = ({ size = 'sm' }: PowerNumberTableProps) => {
  const powerNumberTableKeys = Object.keys(powerNumberTable[0]);

  const header = (
    <tr>
      <th></th>
      {PlayingCard.reverseRanks.map((rank) => (
        <th key={`h${rank[1]}`}>{rank[1]}</th>
      ))}
    </tr>
  );

  const body = (
    <>
      {PlayingCard.reverseRanks.map((rank, rIndex) => (
        <tr key={`b${rank[1]}`}>
          <th className={size === 'lg' ? 'h-10 w-10' : 'h-6 w-6'}>{rank[1]}</th>
          {powerNumberTableKeys.map((_, cIndex) => (
            <td
              key={`c${rIndex}${cIndex}`}
              className={
                'border-collapse border ' +
                (size === 'lg' ? 'h-10 w-10' : 'h-6 w-6')
              }
            >
              <PowerNumberCell size={size} indices={[rIndex, cIndex]} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );

  return <Table header={header} body={body} />;
};
