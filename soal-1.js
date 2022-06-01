/**
 * * Nama		: Irfandi Iqbal Abimanyu
 * * Kelas	: Fullstack Website Batch 3
 *
 * * Soal 1
 * ? Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions)
 * ? beserta contoh penggunaannya (kecuali : split, reverse, join, foreach, map)
 */

/**
 * ! 1. Method filter()
 * * Digunakan untuk membuat array baru dengan elemen yang lulus pengujian
 * * yang diimplementasikan oleh fungsi yang disediakan.
 *
 * ! Syntax
 * * array.filter((element, index, array) => {...})
 * * element  : element saat ini sedang diproses dalam array.
 * * index    : indeks elemen saat ini sedang diproses dalam array.
 * * array    : Array dimana filter() dipanggil.
 */

// ! Example filter()
console.log("\n> 1. Example filter()");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("all numbers : ", numbers);
const odd = numbers.filter((el) => el % 2 === 1);
console.log("odd numbers : ", odd, "\n");

/**
 * ! 2. Method includes()
 * * String  : pencarian case-sensitive untuk menentukan apakah suatu string
 * *           terdapat dalam string yang menggunakan method
 * *           dan mengembalikan nilai true atau false.
 * * Array   : pencarian element dalam array apakah memuat nilai yang dicari
 * *           dan mengembalikan nilai true atau false.
 *
 * ! Syntax
 * * string.includes(searchString) atau array.includes()
 * * searchString   : sebuah string yang akan dicari.
 * * searchElement  : nilai yang akan dicari.
 */

// ! Example includes()
console.log("> 2. Example includes()");
const sentence = "The quick brown fox jumps over the lazy dog";
const pets = ["cat", "dog", "bird", "fish", "rooster", "snake"];
console.log("is it found in the sentence : ", sentence.includes("jumps"));
console.log("is it found in the array : ", pets.includes("hamster"), "\n");

/**
 * ! 3. Method push()
 * * Digunakan untuk menambahkan satu atau lebih elemen ke akhir array
 * * dan mengembalikan panjang array yang baru.
 *
 * ! Syntax
 * * push(element0, element1, ..., elementN)
 * * element0 - N : Elemen yang akan ditambahkan ke akhir array 1 atau lebih.
 */

// ! Example push()
console.log("> 3. Example push()");
const hobbies = ["reading", "writing", "gaming", "running"];
console.log("before push() : ", hobbies);
hobbies.push("swimming");
console.log("after push() : ", hobbies, "\n");

/**
 * ! 4. Method pop()
 * * Digunakan untuk menghapus elemen terakhir dari array
 * * dan mengembalikan elemen tersebut. Metode ini mengubah panjang array.
 *
 * ! Syntax
 * * array.pop();
 */

// ! Example pop()
console.log("> 4. Example pop()");
console.log("before pop() : ", pets);
pets.pop();
console.log("after pop() : ", pets, "\n");

/**
 * ! 5. Method shift()
 * * Digunakan untuk menghapus elemen pertama dari array
 * * dan mengembalikan elemen yang dihapus tersebut. Metode ini mengubah panjang array.
 *
 * ! Syntax
 * * array.shift()
 */

// ! 5. Example shift()
console.log("> 5. Example shift()");
const alatTulis = ["pulpen", "pensil", "spidol", "penghapus", "penggaris"];
console.log("before shift() : ", alatTulis);
alatTulis.shift();
console.log("after shift() : ", alatTulis, "\n");

/**
 * ! 6. Method unshift()
 * * Digunakan untuk menambahkan satu atau lebih elemen ke awal array
 * * dan mengembalikan panjang array yang baru.
 *
 * ! Syntax
 * * array.unshift(element0, element1, ..., elementN)
 * * element0 - N : 1 atau lebih element yang akan ditambahkan ke sebuah array.
 */

// ! Example unshift()
console.log("> 6. Example unshift()");
const randomNums = [0, 1, 2];
console.log("before unshift() : ", randomNums);
randomNums.unshift(-2, -1);
console.log("after unshift() : ", randomNums, "\n");

/**
 * ! 7. Method concat()
 * * String   : menggabungkan string ke string yang dipanggil dan mengembalikan string baru.
 * * Array    : menggabungkan dua atau lebih array. dan tidak mengubah array yang ada,
 * *            tetapi mengembalikan array baru.
 *
 * ! Syntax
 * * string.concat(string0, string1, ..., stringN)
 * * array.concat(array0, array1, ..., arrayN)
 * * string0 - N  : 1 atau lebih string yang akan digabungkan ke sebuah string.
 * * array0 - N   : 1 atau lebih array yang akan digabungkan ke sebuah array.
 */

// ! Example concat()
console.log("> 7. Example concat()");
console.log("# String :");
console.log("before concat() : ", sentence);
const newSentence = sentence.concat(", but lied");
console.log("after concat() : ", newSentence);

console.log("# Array :");
console.log("before concat() : ", pets);
const newPets = pets.concat(["hamster", "rabbit", "otter"]);
console.log("after concat()", newPets, "\n");

/**
 * ! 8. Method slice()
 * * Digunakan untuk mengembalikan salinan satu atau beberapa element array ke array baru
 * * yang dipilih dari start hingga end, di mana start dan end mewakili indeks
 * * element dalam array tersebut. Array asli tidak akan diubah.
 *
 * ! Syntax
 * * array.slice(start, end)
 * * start  : batas awal index untuk mengambil element,
 * *          jika tidak disertakan maka default 0, dapat menggunakan minus index
 * * end    : batas akhir index untuk mengambil element,
 * *          jika tidak disertakan maka default array.length, dapat menggunakan minus index
 */

// ! Example slice()
console.log("> 8. Example slice()");
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("array animals : ", animals);
console.log(
	"slice from index 2 to the end of array [slice(2)] : ",
	animals.slice(2)
);
console.log(
	"slice from index 2 to index 4 of array [slice(2, 4)] : ",
	animals.slice(2, 4)
);
console.log(
	"slice from index 1 to index 5 of array [slice(1, 5)] : ",
	animals.slice(1, 5)
);
console.log(
	"slice from end of array to index -2 [slice(-2)] : ",
	animals.slice(-2)
);
console.log(
	"slice from index 2 to index -1 [slice(2, -1)] : ",
	animals.slice(2, -1),
	"\n"
);

/**
 * ! 9. Method seal()
 * * Digunakan untuk menyegel objek, mencegah properti baru ditambahkan ke dalamnya
 * * dan menandai semua properti yang ada supaya tidak dapat dikonfigurasi.
 * * Sedangkan Nilai properti saat ini masih dapat diubah.
 *
 * ! Syntax
 * * object.seal(obj)
 * * obj  : objek yang akan disegel.
 */

// ! Example seal()
console.log("> 9. Example seal()");
const bio = {
	fullName: "Irfandi Iqbal Abimanyu",
	nickName: "Irfandi",
	dateOfBirth: "29 Desember 2000",
	age: 21,
};
console.log(bio);
Object.seal(bio);
console.log("is seal() : ", Object.isSealed(bio)); // ? check if object is seal or not
bio.nickName = "Abimanyu"; // ! property updated
bio.favColor = "black"; // ! silently doesn't add a new property
delete bio.nickName; // ! silently doesn't delete the property
console.log(
	"after update property, add new property, delete object : ",
	bio,
	"\n"
);

/**
 * ! 10. Method toPrecision()
 * * Digunakan mengembalikan string yang mewakili objek Number ke presisi yang ditentukan.
 *
 * ! Syntax
 * * number.toPrecision(precision)
 * * precision  : bilangan bulat yang menentukan jumlah digit yang dipresisikan.
 */

// ! Example toPrecision()
console.log("> 10. Example toPrecision()");
const pi = 3.14159265359;
console.log("before toPrecision() : ", pi);
console.log("after toPrecision() : ", pi.toPrecision(3), "\n");

// ! source https://developer.mozilla.org/en-US/docs/Web/JavaScript
