import Link from 'next/link';

import { Hero } from '@/components/base/molecules/Hero';

export const AppHero = () => {
  return (
    <Hero>
      <h1 className="text-5xl font-bold text-primary">Pokerious</h1>
      <h2 className="text-2xl">Power-Number</h2>
      <div className="mt-10 flex flex-col items-center justify-center space-y-5">
        <Link href="fill-in" className="btn-primary btn">
          Fill In Mode
        </Link>
        <Link href="calc" className="btn-disabled btn-primary btn">
          Calc Mode
        </Link>
      </div>
    </Hero>
  );
};
