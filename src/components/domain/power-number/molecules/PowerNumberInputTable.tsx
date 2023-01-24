import { Table } from '@/components/base/molecules/Table';
import { PowerNumberInputCell } from '@/components/domain/power-number/atoms/PowerNumberInputCell';

import { PlayingCard } from '@/utils/poker/playingCard';
import { powerNumberTable } from '@/utils/poker/powerNumber';

interface PowerNumberInputTableProps {
  size?: 'sm' | 'lg';
  isDisabled?: boolean;
}

export const PowerNumberInputTable = ({
  size = 'sm',
  isDisabled = false,
}: PowerNumberInputTableProps) => {
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
          <th>{rank[1]}</th>
          {powerNumberTableKeys.map((_, cIndex) => (
            <td key={`c${rIndex}${cIndex}`} className="border-collapse border">
              <PowerNumberInputCell
                size={size}
                indices={[rIndex, cIndex]}
                isDisabled={isDisabled}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );

  return <Table header={header} body={body} />;
};
