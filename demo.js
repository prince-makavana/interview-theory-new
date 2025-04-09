const obj = {
    name: 'prince',
    greed: function () {
        console.log(this)
        return () => {
            return `Hello ${this.name}`
        }
    }
}

console.log(obj.greed()())
var x = 0;
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}
