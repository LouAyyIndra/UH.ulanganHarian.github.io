//No 1

function cetakFunction(a){
    return ` Hallo Nama Saya` + a
}

console.log(cetakFunction("Loayyy"));

//No 2

let angka1 = 20;
let angka2 = 7;
function myFunction(a,b){
    return a + b;
}
let output = myFunction(angka1,angka2)
console.log(myFunction(20,7)); 

//No 3

function Hello(){
    return "HELLO"
}

//No 4

let obj = {
    nama : "john",
    umur : 22,
    bahasa : "Indonesia",
}

console.log(obj.bahasa)

//No 5

let arrayDaftarPeserta = ["john doe", "laki-laki", "baca buku",1992]
let objectDaftarPeserta ={
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahun : arrayDaftarPeserta[3],
}
console.log(objectDaftarPeserta);

//No 6

let buah = [{
    Nama : "Nanas",
    warna : "Kuning",
    adabijinya : "Tidak",
    harga : 9000,
},
{
    Nama : "Jeruk",
    warna : "Oranye",
    adabijinya : "Ada",
    harga : 8000,
},
{
    Nama : "Semangka",
    warna : "Hijau Dan Merah",
    adabijinya : "Ada",
    harga : 1000,
},
{
    Nama : "Pisang",
    warna : "Kuning",
    adabijinya : "Tidak",
    harga : 3000,
}
]
let berBiji = buah.filter((buah) => buah.adabijinya === 'Kuning');

console.log(berBiji);

