interface HeroProps {
  children: React.ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <div className="hero h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};
