class Person {
    fullname : string;
    age: number;
    egg: boolean;
    constructor(public firstname, public lastname) {
        this.fullname = firstname + " " + lastname;
    }
}
