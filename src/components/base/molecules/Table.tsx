interface TableProps {
  header?: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

export const Table = ({ header, body, footer }: TableProps) => {
  return (
    <table className="table-fixed text-center">
      <thead>{header}</thead>
      <tbody>{body}</tbody>
      <tfoot>{footer}</tfoot>
    </table>
  );
};
