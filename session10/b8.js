"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(newWidth) {
        this._width = newWidth;
    }
    get height() {
        return this._height;
    }
    set height(newHeight) {
        this._height = newHeight;
    }
    calculateArea() {
        return this._width * this._height;
    }
    calculatePerimeter() {
        return 2 * (this._width + this._height);
    }
}
let rectangle = new Rectangle(4, 6);
console.log("Chiều dài của hình chữ nhật:", rectangle.width);
console.log("Chiều rộng của hình chữ nhật:", rectangle.height);
console.log("Chu vi của hình chữ nhật:", rectangle.calculatePerimeter());
console.log("Diện tích của hình chữ nhật:", rectangle.calculateArea());
rectangle.width = 8;
rectangle.height = 5;
console.log("Sau khi cập nhật kích cỡ:");
console.log("Chiều dài của hình chữ nhật:", rectangle.width);
console.log("Chiều rộng của hình chữ nhật:", rectangle.height);
console.log("Chu vi của hình chữ nhật:", rectangle.calculatePerimeter());
console.log("Diện tích của hình chữ nhật:", rectangle.calculateArea());
