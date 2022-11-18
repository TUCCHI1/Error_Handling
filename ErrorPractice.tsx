type Result<T, E extends Error> = Success<T> | Failure<E>;

class Success<T> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  isSuccess(): this is Success<T> {
    return true;
  }

  isFailure(): this is Failure<Error> {
    return false;
  }
}

class Failure<E extends Error> {
  readonly error: E;

  constructor(error: E) {
    this.error = error;
  }

  isSuccess(): this is Success<unknown> {
    return false;
  }

  isFailure(): this is Failure<E> {
    return true;
  }
}

function foo(): Result<string, ErrorX | ErrorY> {
  // 正常系
  // Successを返す
  return new Success("success");

  // 異常系
  // throwは使わずにFailureを返す
  return new Failure(new ErrorX("x"));
}
