interface InputCellProps {
  size?: 'sm' | 'lg';
  indices: [number, number];
  placeholder: string;
  value: string;
  isDisabled?: boolean;
  onChange: (indices: [number, number], value: string) => void;
}

export const InputCell = ({
  size = 'sm',
  indices,
  placeholder,
  value,
  isDisabled = false,
  onChange,
}: InputCellProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      disabled={isDisabled}
      className={
        'input input-xs m-0 p-0 text-center ' +
        (size === 'lg' ? 'h-10 w-10' : 'h-4 w-4')
      }
      onChange={(e) => onChange(indices, e.target.value)}
    />
  );
};
