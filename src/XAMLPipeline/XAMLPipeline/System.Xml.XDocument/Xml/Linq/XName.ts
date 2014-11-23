class XName { 
    private hashCode: number;
    constructor(public localName : string, public ns: XNamespace) { 
        //this.hashCode = ns.GetHashCode() ^ localName.GetHashCode();
    }
}