/* Utils */

export type Primitive =
  | number
  | string
  | boolean
  | bigint
  | symbol
  | undefined
  | null;

export type DeepReadonly<T> = T extends Primitive
  ? { readonly [K in keyof T]: T[K] }
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

export type Ok<T> = { ok: true; value: T; err?: null | undefined };

export type Err<E> = { ok: false; value?: null | undefined; err: E };

export type Result<T, E> = Ok<T> | Err<E>;

export type ResultAsync<T, E> = PromiseLike<Result<T, E>>;

export type Maybe<T> = T | null | undefined;

export type Pair<T> = [T, T];

/* Playing Card */

export type SuitNumber = 0 | 1 | 2 | 3;
export type SuitString = 'spades' | 'hearts' | 'diamonds' | 'clubs';
export type RankNumber = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
export type RankString =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'T'
  | 'J'
  | 'Q'
  | 'K'
  | 'A';

export type CardProperties = {
  suit: SuitNumber;
  rank: RankNumber;
};

/* Position */

export type PositionNumber = 0 | 1 | 2 | 3 | 4 | 5;
export type PositionString = 'sb' | 'bb' | 'utg' | 'hj' | 'co' | 'btn';

/* Player */

export type PlayerProperties = {
  position: PositionNumber;
  stack: number;
  hand: {
    cards: readonly [CardProperties, CardProperties];
    isSuited: boolean;
  };
};
