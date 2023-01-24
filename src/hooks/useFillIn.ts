import { useState } from 'react';

export const useFillIn = () => {
  const [fillInState, setFillInState] = useState<0 | 1 | 2>(0);

  return [fillInState, setFillInState] as const;
};
