"use strict";
// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var k = 0; k < length - 1; k++) {
                if (this.collection[k] > this.collection[k + 1]) {
                    var leftNumber = this.collection[k];
                    this.collection[k] = this.collection[k + 1];
                    this.collection[k + 1] = leftNumber;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([323, 3, -22, 45]);
sorter.sort();
console.log(sorter.collection);
