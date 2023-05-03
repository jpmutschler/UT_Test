function jsoncall() {
    console.log(this);



}

jsoncall();

var call = {
    name: "Josh",
    getName: function () {
        console.log(this);
        return this.name;
    }
}

console.log(Josh.getName());