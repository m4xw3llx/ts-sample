class Success <T, E> extends Failable<T, E> {
    public value: T;
    constructor(value: T) {
        super()
        this.value=value
    }

    public match<U> (f: Function1<Success<T, E>, U>, g: Function1<Failure<T, E>, U>): U {
        return f(this)
    }
}