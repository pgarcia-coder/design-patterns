abstract class Gadget {
    public name;
    public ram;
    public hdd;
    //...

    constructor(name: string, ram: number, hdd: number) {
        this.name = name;
        this.ram = ram;
        this.hdd = hdd;
    }

    abstract run(): void;
}

class Laptop extends Gadget {
    run() {
        console.log(`Running laptop ${this.name}`);;
    }
}

class Tablet extends Gadget {
    run() {
        console.log(`Running tablet ${this.name}`);;
    }
}

class GadgetFactory {
    static createGadget(type: string, name: string, ram: number, hdd: number) {
        switch (type) {
            case 'Laptop':
                return new Laptop(name, ram, hdd);
            case 'Tablet':
                return new Tablet(name, ram, hdd);
        
            default:
                throw Error('Invalid gadget type');
        }
    }
}

const laptop = GadgetFactory.createGadget('Laptop', 'hp', 512, 1);
laptop.run(); // Running laptop hp
const tablet = GadgetFactory.createGadget('Tablet', 'samsung', 512, 1);
tablet.run(); // Running tablet samsung