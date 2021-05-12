class Person {
    readonly firstName: string;
    readonly lastName: string;
    readonly age: number;
    readonly gender: string;

    constructor(firstName: string, lastName: string, age: number, gender: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    };
}

class PersonBuilder {
    private firstName: string;
    private lastName: string;
    private age: number;
    private gender: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.gender = '';
    };

    public withFirsName(firstName: string): PersonBuilder {
        this.firstName = firstName;
        return this;
    }

    public withLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    }

    public withAge(age: number): PersonBuilder {
        this.age = age;
        return this;
    }

    public withGender(gender: string): PersonBuilder {
        this.gender = gender;
        return this;
    }

    public build(): Person {
        return new Person(this.firstName, this.lastName, this.age, this.gender);
    }
}

const person: Person = new PersonBuilder()
  .withFirsName('Jhon')
  .withLastName('Smith')
  .withAge(35)
  .withGender('Male')
  .build();

console.log(person);