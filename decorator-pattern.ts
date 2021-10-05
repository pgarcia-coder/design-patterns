interface Describable {
    describe(): string;
}

class SimpleFile implements Describable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe() {
        return `${this.name}`;
    };
}

class JsFileDecorator implements Describable {
    file: Describable;

    constructor(file: Describable) {
        this.file = file;
    }

    describe() {
        return `JSFile: ${this.file.describe()}`;
    };
}

const simpleFile = new SimpleFile('simpleFile');
console.log(simpleFile.describe()); // simpleFile
const jsFile = new JsFileDecorator(simpleFile);
console.log(jsFile.describe()); // JSFile: simpleFile