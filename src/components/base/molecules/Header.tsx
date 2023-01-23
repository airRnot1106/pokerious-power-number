interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className="flex items-center p-5">
      <h1 className="select-none text-5xl font-bold text-primary">{title}</h1>
      {children}
    </header>
  );
};
