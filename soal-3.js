/**
 * * Nama   : Irfandi Iqbal Abimanyu
 * * Kelas	: Fullstack Website Batch 3
 *
 * * Soal 3
 * ? Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array).
 * ? Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
 * ? Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir,
 * ? mengurutkan hasil pencarian dan menampilkannya ke layar/console.
 * ? untuk ketentuan lainnya seperti dalam soal.
 */

/**
 * * Membuat fungsi seleksiNilai dengan parameter nilaiAwal, nilaiAkhir, dan dataArray.
 * * Dengan ketentuan validasi sesuai dengan soal di atas.
 * * Dan ketentuan pencarian data sesuai dengan soal di atas.
 */
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	let error = false;
	let errorMsg = [];

	// Melakukan validasi parameter function
	if (typeof nilaiAwal !== "number") {
		errorMsg.push("[x] Nilai awal yang dimasukkan harus number!");
		error = true;
	}
	if (typeof nilaiAkhir !== "number") {
		errorMsg.push("[x] Nilai akhir yang dimasukkan harus number!");
		error = true;
	}
	if (!Array.isArray(dataArray)) {
		errorMsg.push("[x] Data yang dimasukkan harus array!");
		error = true;
	}

	if (!error) {
		if (nilaiAwal > nilaiAkhir) {
			console.log("[x] Nilai akhir harus lebih besar dari nilai awal");
		} else if (dataArray.length <= 5) {
			console.log("[x] Jumlah angka dalam dataArray harus lebih dari 5");
		} else {
			let result = dataArray
				.filter((el) => el >= nilaiAwal && el <= nilaiAkhir)
				.sort((a, b) => a - b);
			if (result.length === 0) {
				console.log("[x] Nilai tidak ditemukan :", result);
			} else {
				console.log(result);
			}
		}
	} else {
		console.log(errorMsg.join("\n"));
	}
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); // [8, 14, 17]
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); // “Nilai akhir harus lebih besar dari nilai awal”
seleksiNilai(5, 17, [2, 25, 4]); // “Jumlah angka dalam dataArray harus lebih dari 5”
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); // “Nilai tidak ditemukan”
