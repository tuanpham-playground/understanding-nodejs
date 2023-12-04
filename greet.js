var person = {
    firstName: "John",
    lastName : "Doe",
    greet: function() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
}

var person1 = Object.create(person);
person1.firstName = "Alice";
person1.lastName = "Doe";

var person2 = Object.create(person);
// person2.firstName = "Bob";
// person2.lastName = "Doe";
person1.greet(); // Hello, Alice Doe

person2.greet(); // Hello, Bob Doe