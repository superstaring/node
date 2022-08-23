function Person(name) {
    this.name = '1';
}

const p = new Person();

console.log(p.constructor === Person); // true