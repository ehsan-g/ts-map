// class Sorter {
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }

class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let k = 0; k < length - 1; k++) {
        if (this.collection[k] > this.collection[k + 1]) {
          const leftNumber = this.collection[k];
          this.collection[k] = this.collection[k + 1];
          this.collection[k + 1] = leftNumber;
        }
      }
    }
  }
}

const sorter = new Sorter([323, 3, -22, 45]);
sorter.sort();
console.log(sorter.collection);
