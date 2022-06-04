const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (data, sortByFunc) => {
  const dataTerurut = sortByFunc(data);
  const dataBernomor = [];

  for (let i=0; i<dataTerurut.length; i++) {
    dataBernomor.push(i+1 +'. '+ dataTerurut[i]);
  }

  return dataBernomor
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (data) => {
  const dataUrutAsc = data.sort();
  return dataUrutAsc;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (data) => {
  const dataUrutDsc = data.sort().reverse();
  return dataUrutDsc;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
