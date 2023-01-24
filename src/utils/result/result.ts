import type { Result, Ok, Err, Maybe, ResultAsync } from '@/types/type';

export const createOk = <T>(value: T): Ok<T> => ({ ok: true, value });

export const createErr = <E extends Error>(err: E): Err<E> => ({
  ok: false,
  err,
});

export const isOk = <T, E>(result: Result<T, E>): result is Ok<T> => result.ok;

export const isErr = <T, E>(result: Result<T, E>): result is Err<E> =>
  !result.ok;

export const unwrap = <T, E>(result: Result<T, E>): Maybe<T> => result.value;

export const unwrapErr = <E>(result: Err<E>): E => result.err;

export const unwrapOr = <T, E>(result: Result<T, E>, defaultValue: T): T =>
  isOk(result) ? result.value : defaultValue;

export const map = <T, E, U>(
  result: Result<T, E>,
  callback: (value: T) => U
): Result<U, E> => {
  if (isOk(result)) {
    return createOk(callback(result.value));
  } else {
    return result;
  }
};

export const mapErr = <T, E, U extends Error>(
  result: Result<T, E>,
  callback: (err: E) => U
): Result<T, U> => {
  if (isErr(result)) {
    return createErr(callback(result.err));
  } else {
    return result;
  }
};

export const flatMap = <T, E, U>(
  result: Result<T, E>,
  callback: (value: T) => Result<U, E>
): Result<U, E> => {
  if (isOk(result)) {
    return callback(result.value);
  } else {
    return result;
  }
};

export const flatMapErr = <T, E, U>(
  result: Result<T, E>,
  callback: (err: E) => Result<T, U>
): Result<T, U> => {
  if (isErr(result)) {
    return callback(result.err);
  } else {
    return result;
  }
};

export const match = <T, E, U>(
  result: Result<T, E>,
  okCallback: (value: T) => U,
  errCallback: (err: E) => U
): U => {
  if (isOk(result)) {
    return okCallback(result.value);
  } else {
    return errCallback(result.err);
  }
};

export const fromPromiseToResultAsync = <T, E extends Error>(
  promise: Promise<T>
): ResultAsync<T, E> => {
  const result = promise
    .then((value: T) => createOk(value))
    .catch((err: E) => createErr(err));
  return result;
};

export const fromResultToResultAsync = <
  T extends Promise<unknown>,
  E extends Error
>(
  result: Result<T, E>
): ResultAsync<Awaited<T>, E> => {
  if (isOk(result)) {
    return fromPromiseToResultAsync(Promise.resolve(result.value));
  } else {
    return Promise.resolve(createErr(result.err));
  }
};

export const mapAsync = <T, E, U>(
  result: ResultAsync<T, E>,
  callback: (value: T) => U
): ResultAsync<U, E> => {
  const resultAsync = result.then((result) => {
    if (isOk(result)) {
      return createOk(callback(result.value));
    } else {
      return result;
    }
  });
  return resultAsync;
};

export const mapErrAsync = <T, E, U extends Error>(
  result: ResultAsync<T, E>,
  callback: (err: E) => U
): ResultAsync<T, U> => {
  const resultAsync = result.then((result) => {
    if (isErr(result)) {
      return createErr(callback(result.err));
    } else {
      return result;
    }
  });
  return resultAsync;
};

export const flatMapAsync = <T, E, U>(
  result: ResultAsync<T, E>,
  callback: (value: T) => ResultAsync<U, E>
): ResultAsync<U, E> => {
  const resultAsync = result.then((result) => {
    if (isOk(result)) {
      return callback(result.value);
    } else {
      return result;
    }
  });
  return resultAsync;
};

export const flatMapErrAsync = <T, E, U>(
  result: ResultAsync<T, E>,
  callback: (err: E) => ResultAsync<T, U>
): ResultAsync<T, U> => {
  const resultAsync = result.then((result) => {
    if (isErr(result)) {
      return callback(result.err);
    } else {
      return result;
    }
  });
  return resultAsync;
};
