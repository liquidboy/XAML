

class PrimitiveNamespace extends XamlNamespace {
    constructor(prefix : string) {
        super();
        this.AddPrefix(prefix);
    }
}