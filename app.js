let Car = function(x, y) {
    this.x = x
    this.y = y
}
Car.prototype.draw = function() {
    this.element = document.createElement('img')
    this.element.src = './car.png'
    this.element.style.cssText =
        `position: absolute;
        left: ${this.x}px;
        top: ${this.y}px;`
    document.querySelector('body').append(this.element)
}
let nissan = new Car(100, 100)
nissan.draw()