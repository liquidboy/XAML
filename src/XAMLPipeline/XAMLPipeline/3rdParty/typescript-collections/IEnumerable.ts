interface IEnumerable {
    GetEnumerator(): IEnumerator;
}
interface IEnumerableOfType<T> extends IEnumerable {
    GetEnumerator(): IEnumeratorOfType<T>;
}
