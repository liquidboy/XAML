interface IEnumerator {
    Current: Object;
    MoveNext(): boolean;
    Reset(): void;
}

interface IEnumeratorOfType<T> extends IEnumerator {
    Current(): T;
}