class LinkedListNode<T> {
    item: T;
    next: LinkedListNode<T>;
    prev: LinkedListNode<T>;
    list: LinkedList<T>;

    constructor(value: T) {
        this.item = value;
    }

    private _linkedListNode(list: LinkedList<T>, value: T): void {
        this.list = list;
        this.item = value;
    }

    public List(): LinkedList<T> {
        return this.list;
    }

    public Next(): LinkedListNode<T> {
        return this.next == null || this.next == this.list.head ? null : this.next;
    }

    public Previous(): LinkedListNode<T> {
        return this.prev == null || this == this.list.head ? null : this.prev;
    }

    public GetValue(): T { return this.item; }

    public SetValue(value: T): void { this.item = value; }
}


// This LinkedList is a doubly-Linked circular list.
class LinkedList<T> implements ICollectionOfType<T>, ICollection  {
    
    public head: LinkedListNode<T>; //this should be private BUT the linkedlistnode needs head, and cant nest classes
    private version: number;
    private count: number;
    private _syncRoot: Object;

    public Count: number = this.count;
    public SyncRoot: Object = this._syncRoot;
    public IsSynchronized: boolean;


    constructor(collection: IEnumerableOfType<T>) { 
        if (collection == null) {
            throw new ArgumentNullException("collection");
        }
        
        //this.forEach(T item in collection) {
        ////    AddLast(item);
        //}

    }

    public First(): LinkedListNode<T>  {
        return this.head;
    }

    public IsReadOnly(): boolean { 
        return false;
    }
    public Add(item: T): void { 
    
    }
    public Clear(): void { 
    
    }
    public Contains(item: T): boolean { 
        return false;
    }
    public CopyTo(array: T[], arrayIndex: number): void { 
    
    }
    public Remove(item: T): boolean { 
        return false;
    }

    public GetEnumerator(): IEnumeratorOfType<T> { 

        return null;
    }

    private forEach(callback: (item: T) => boolean): void {
        var currentNode : LinkedListNode<T> = this.First();
        while (currentNode !== null) {
            if (callback(currentNode.item) === false) {
                break;
            }
            currentNode = currentNode.Next();
        }
    }















    
}