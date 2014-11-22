class XamlNamespace {

    name: string;
    is_ignored: boolean;
    prefixes: any = [];

    constructor() {
        this.name = null;
        this.prefixes = null;
        this.is_ignored = false;
    }

    public FindElement(p: XamlParserInfo, el: string, attr: string, create: boolean): XamlElementInfo { 

        return null;
    }

    public SetAttribute(p: XamlParserInfo, item : XamlElementInstance, attr: string, value: string): boolean { 
        return false;
    }

    public AddPrefix(prefix: string) { }
    public HasPrefix(prefix: string) : boolean { 
        return false;
    }
    public GetPreixes(): any { 
        return this.prefixes;
    }
}