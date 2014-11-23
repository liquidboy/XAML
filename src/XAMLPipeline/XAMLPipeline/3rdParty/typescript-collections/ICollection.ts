interface ICollectionOfType<T> extends IEnumerableOfType<T> {
    Count: number;
    IsReadOnly(): boolean;
    Add(item: T): void;
    Clear(): void;
    Contains(item: T): boolean;
    CopyTo(array: Array<T>, index: number): void;
    Remove(item: T): boolean;
} 

interface ICollection {
    Count: number;
    CopyTo(array: Array<any>, index: number): void;
    SyncRoot: Object;
    IsSynchronized: boolean;
}
