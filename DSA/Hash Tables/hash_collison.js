class HashTable {
  constructor(size = 53) {
    this.hashMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let random_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 97;
      total = (total * random_prime + value) % this.hashMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.hashMap[index]) {
      this.hashMap[index] = [];
    }

    this.hashMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.hashMap[index]) {
      for (let i = 0; i < this.hashMap[index].length; i++) {
        if (this.hashMap[index][i][0] === key) {
          return this.hashMap[index][i];
        }
      }
    }

    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

// console.log(ht.hashMap);
console.log(ht.get("plum"));
