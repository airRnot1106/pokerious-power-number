import { ValidationError } from '@/utils/result/error';
import { createOk, createErr } from '@/utils/result/result';

import type {
  DeepReadonly,
  CardProperties,
  RankNumber,
  RankString,
  SuitNumber,
  SuitString,
  Result,
} from '@/types/type';

export class PlayingCard {
  static readonly suits = [
    [0, 'spades'],
    [1, 'hearts'],
    [2, 'diamonds'],
    [3, 'clubs'],
  ] as const satisfies DeepReadonly<[SuitNumber, SuitString][]>;

  static readonly ranks = [
    [2, '2'],
    [3, '3'],
    [4, '4'],
    [5, '5'],
    [6, '6'],
    [7, '7'],
    [8, '8'],
    [9, '9'],
    [10, 'T'],
    [11, 'J'],
    [12, 'Q'],
    [13, 'K'],
    [14, 'A'],
  ] as const satisfies DeepReadonly<[RankNumber, RankString][]>;

  static readonly reverseRanks = [...PlayingCard.ranks].reverse();

  private readonly _deck: CardProperties[] = [];

  constructor() {
    for (const [suit] of PlayingCard.suits) {
      for (const [rank] of PlayingCard.ranks) {
        const card = { suit, rank };
        this._deck.push(card);
      }
    }
  }

  get deck() {
    return this._deck;
  }

  public shuffle() {
    for (let i = this._deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      [this._deck[i], this._deck[j]] = [this._deck[j]!, this._deck[i]!];
    }
  }

  public draw(): Result<CardProperties, ValidationError> {
    const card = this._deck.pop();
    if (card) {
      return createOk(card);
    } else {
      return createErr(new ValidationError('Deck is empty'));
    }
  }
}
