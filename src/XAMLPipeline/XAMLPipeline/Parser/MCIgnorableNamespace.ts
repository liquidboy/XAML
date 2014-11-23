class MCIgnorableNamespace extends XamlNamespace {
    constructor(prefix: string) {
        super();
        this.AddPrefix(prefix);
    }
}