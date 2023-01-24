const I = Infinity;

export const powerNumberTable = [
  [I, I, I, I, I, 50, 37, 32, 28, 31, 27, 26, 24],
  [I, I, I, 75, 66, 44, 17, 15, 14, 13, 11, 10, 9],
  [I, 48, I, 75, 58, 38, 16, 11, 10, 8, 8, 8, 8],
  [50, 31, 26, I, 58, 39, 21, 12, 7, 7, 7, 7, 5],
  [36, 19, 17, 22, I, 43, 26, 15, 10, 9, 7, 5, 4],
  [27, 12, 9, 9, 11, I, 31, 17, 10, 9, 3, 3, -I],
  [24, 10, 8, 8, 10, 10, 66, 19, 15, 10, 5, -I, -I],
  [22, 9, 6, 5, 6, 7, 10, 58, 15, 10, 9, -I, -I],
  [18, 9, 6, 4, 3, 3, 4, 7, 51, 11, 10, 4, -I],
  [21, 9, 6, 4, -I, -I, -I, -I, -I, 44, 11, 8, -I],
  [18, 8, 5, 3, -I, -I, -I, -I, -I, -I, 39, 6, -I],
  [16, 8, 5, 3, -I, -I, -I, -I, -I, -I, -I, 33, -I],
  [15, 7, 4, 3, -I, -I, -I, -I, -I, -I, -I, -I, 28],
] as const;

export const calcMPoint = (
  stack: number,
  sb: number,
  bb: number,
  totalAnte: number
) => {
  const pot = sb + bb + totalAnte;
  if (pot === 0) return I;
  const m = stack / pot;
  return m;
};

export const calcEffectiveMPoint = (m: number, remaining: number) => {
  const effectiveM = m * remaining;
  return effectiveM;
};
