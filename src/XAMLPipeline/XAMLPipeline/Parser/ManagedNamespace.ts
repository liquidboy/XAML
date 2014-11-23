class ManagedNamespace extends XamlNamespace {
    xmlns: string;
    constructor(xmlns: string, prefix: string) {
        super();
        this.xmlns = xmlns;
        this.AddPrefix(prefix);
    }
}