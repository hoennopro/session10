"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get length() {
        return this._length;
    }
    set length(newLength) {
        this._length = newLength;
    }
}
let song1 = new Song(1, "Shape of You", 240);
console.log("Tên bài hát ban đầu:", song1.name);
console.log("Độ dài ban đầu của bài hát:", song1.length);
song1.name = "Perfect";
song1.length = 320;
console.log("Tên bài hát sau khi thay đổi:", song1.name);
console.log("Độ dài bài hát sau khi thay đổi:", song1.length);
