// interface IFailure<E> {
//     tag: "failure";
//     reason: E;
// }

// interface ISuccess<T> {
//     tag: "success";
//     reason: T;
// }

// type Failable<T, E> = IFailure<E> | ISuccess<T>;

// function failable<T, U, E>(
//     r: Failable<T, E>,
//     f: (_: ISuccess<T>) => U,
//     g: (_: IFailure<E>) => U
// ): U {
//     switch (r.tag) {
//         case "success":
//             return f(r);
//         case "failure":
//             return g(r);
//     }
// }

type Function1<T,U> = (x: T) => U

abstract class Failable<T, E> {
    public abstract  match <U>(f: Function1<Success<T, E>, U>, g: Function1<Failure<T, E>, U>): U;
}

