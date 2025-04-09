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
