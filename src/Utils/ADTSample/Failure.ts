class Failure <T, E> extends Failable<T, E> {
    public reason: E;
    constructor(reason: E) {
        super()
        this.reason = reason
    }

    public match<U> (f: Function1<Success<T, E>, U>, g: Function1<Failure<T, E>, U>): U {
        return g(this)
    }
}