/**
 * * Nama   : Irfandi Iqbal Abimanyu
 * * Kelas	: Fullstack Website Batch 3
 *
 * * Soal 2
 * ? Buatlah program searching nama yang dapat dibatasi
 * ? jumlah outputnya yang menerapkan callback function
 * ? dengan ketentuan seperti di dalam soal.
 */

// * Data seperti yang disediakan di dalam soal
const names = [
	"Abigail",
	"Alexandra",
	"Alison",
	"Amanda",
	"Angela",
	"Bella",
	"Carol",
	"Caroline",
	"Carolyn",
	"Deirdre",
	"Diana",
	"Elizabeth",
	"Ella",
	"Faith",
	"Olivia",
	"Penelope",
	{},
];

/**
 * * callback function showResult
 * * untuk menampilkan array dengan batas output
 */
const showResult = (arr, limit) => {
	let error = false;
	let errorMsg = [];

	// Melakukan validasi parameter function
	if (!Array.isArray(arr)) {
		errorMsg.push("Data yang dimasukkan harus array!");
		error = true;
	}
	if (typeof limit !== "number") {
		errorMsg.push("Limit yang dimasukkan harus number!");
		error = true;
	}

	if (!error) {
		return arr.slice(0, limit);
	} else {
		return errorMsg.join("\n");
	}
};

/**
 * * function searchNama
 * * sebagai fungsi utama untuk mencari setiap element names
 * * apakah terdapat query didalamnya, serta memanggil callback fungsi
 * * untuk menampilkan hasil pencarian dengan batas output
 */
const searchName = (filter, limit = 1, callback) => {
	let error = false;
	let errorMsg = [];

	// Melakukan validasi parameter function
	if (typeof filter !== "string") {
		errorMsg.push("Filter yang dimasukkan harus string!");
		error = true;
	}
	if (typeof limit !== "number") {
		errorMsg.push("Limit yang dimasukkan harus number!");
		error = true;
	}
	if (typeof callback !== "function") {
		errorMsg.push("Callback yang dimasukkan harus function!");
		error = true;
	}

	if (!error) {
		let result = names.filter(
			(el) =>
				typeof el === "string" &&
				el.toLowerCase().includes(filter.toLowerCase())
		);
		console.log(callback(result, limit));
	} else {
		console.log(errorMsg.join("\n"));
	}
};

searchName("an", 3, showResult);
