'use client';

import { PowerNumberInputTable } from '@/components/domain/power-number/molecules/PowerNumberInputTable';
import { PowerNumberTable } from '@/components/domain/power-number/molecules/PowerNumberTable';

import { useFillIn } from '@/hooks/useFillIn';
import { usePowerNumberTable } from '@/hooks/usePowerNumberTable';
import { useTimer } from '@/hooks/useTimer';

export default function FillIn() {
  const [fillInState, setFillInState] = useFillIn();

  const [
    { timer },
    { start: startTimer, pause: pauseTimer, reset: resetTimer },
  ] = useTimer();

  const [score, resetPowerNumberTable] = usePowerNumberTable();

  const start = () => {
    setFillInState(1);
    startTimer();
  };

  const reset = () => {
    setFillInState(0);
    resetTimer();
    resetPowerNumberTable();
  };

  const done = () => {
    setFillInState(2);
    pauseTimer();
  };

  const beforeStart = (
    <>
      <h1 className="mt-5 h-20 text-center text-2xl font-bold">
        Fill In The Power Number <br /> Table Below
      </h1>
      <div className="mt-5">
        <PowerNumberInputTable isDisabled />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="btn-primary btn" onClick={start}>
          Start
        </button>
      </div>
    </>
  );

  const afterStart = (
    <>
      <p className="mt-5 h-20 text-center text-2xl font-bold">Time: {timer}s</p>
      <div className="mt-5">
        <PowerNumberInputTable />
      </div>
      <div className="mt-10 flex items-center justify-center space-x-10">
        <button className="btn-success btn" onClick={done}>
          Done
        </button>
        <button className="btn" onClick={reset}>
          Give Up
        </button>
      </div>
    </>
  );

  const afterDone = (
    <>
      <div className="mt-5">
        <PowerNumberInputTable isDisabled />
      </div>
      <div className="mt-5">
        <PowerNumberTable />
      </div>
      <div className="mt-5">
        <p className="text-center text-xl">Result</p>
        <p className="mt-3 text-2xl font-bold">Time: {timer}s</p>
        <p className="text-3xl font-bold">Score: {score} / 121</p>
      </div>
      <div className="mt-10 flex items-center justify-center space-x-10">
        <button className="btn-primary btn" onClick={reset}>
          Retry
        </button>
      </div>
    </>
  );

  const components = [beforeStart, afterStart, afterDone] as const;
  return (
    <main className="min-h-full py-5">
      <div className="flex flex-col items-center">
        {components[fillInState]}
      </div>
    </main>
  );
}
