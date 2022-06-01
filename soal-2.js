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
];

/**
 * * callback function showResult
 * * untuk menampilkan array dengan batas output
 */
const showResult = (arr, jumlah) => {
	console.log(arr.slice(0, jumlah >= arr.length ? arr.length : jumlah));
};

/**
 * * function searchNama
 * * sebagai fungsi utama untuk mencari setiap element names
 * * apakah terdapat query didalamnya, serta memanggil callback fungsi
 * * untuk menampilkan hasil pencarian dengan batas output
 */
const searchName = (query, jumlah, callback) => {
	let result = names.filter((el) => el.toLowerCase().includes(query));
	callback(result, jumlah);
};

searchName("an", 3, showResult);
