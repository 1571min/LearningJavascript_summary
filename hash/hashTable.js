const LimitedArray = function(limit) {
  const storage = [];

  const limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (let i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };
  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

const getIndexBelowMaxForKey = function(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  const bucket = this._storage.get(index) || [];

  for (let i = 0; i < bucket.length; i += 1) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      const oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size += 1;

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }

  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  const bucket = this._storage.get(index) || [];

  for (let i = 0; i < bucket.length; i += 1) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  const bucket = this._storage.get(index) || [];

  for (let i = 0; i < bucket.length; i += 1) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size -= 1;
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype._resize = function(newLimit) {
  const oldStorage = this._storage;

  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) {
    return;
  }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(bucket => {
    if (!bucket) {
      return;
    }
    for (let i = 0; i < bucket.length; i += 1) {
      const tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  });
};

let hashTable;
let people = [
  ['Steven', 'Tyler'],
  ['George', 'Harrison'],
  ['Mr.', 'Doob'],
  ['Dr.', 'Sunshine'],
  ['John', 'Resig'],
  ['Brendan', 'Eich'],
  ['Alan', 'Turing']
];

hashTable = new HashTable();

for (let i = 0; i < people.length; i++) {
  hashTable.insert(people[i][0], people[i][1]);
}

hashTable._storage.each(function(ele) {
  console.log(ele);
});
