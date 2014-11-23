interface IList<T> extends ICollectionOfType<T> {

    IndexOf(item: T): number;
    Insert(index: number, item: T): void;
    RemoveAt(index: number): void;


    //T this[int index] {
    //get;
    //set;
    //}
}