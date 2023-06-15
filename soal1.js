console.log("===============================================================")
console.log("========================KALKULATOR AKAR========================")

ulang = false;
while(ulang == false){
    const prompt = require('prompt-sync')({sigint: true});
    var sqrt = require( 'math-sqrt' );
    hitung = false;
    while(hitung==false){
        console.log("===============================================================")
        const angka = prompt('Masukkan nilai yang akan dicari akarnya: ');
        if (angka%2 == 0 && angka>=0){
            var hasil = sqrt(angka);
            console.log("Hasil akar "+angka+" adalah "+hasil);
            hitung = true;
        }
        else if(angka<0){
            console.log("**Inputan bilangan negatif, masukkan bilangan positif**");
            hitung = false;
        }
        else{
            console.log("***Inputan bilangan ganjil, masukkan bilangan genap***");
            hitung = false;
        }
    } 
    boolean = false;
    while(boolean == false){
        console.log("-------------------------------------------------------")
        console.log("Apakah ingin menghitung lagi? \n 1. Ya \n 2. Tidak");
        const pilih = prompt("Masukkan pilihanmu :");
        if(pilih==1){
            boolean = true;
            ulang = false;
        }else if (pilih ==2){
            console.log("-------------------------------------------------------")
            console.log("Kalkulator ditutup, terimakasih");
            boolean = true;
            ulang = true;
        }else{
            console.log("Pilihan tidak tersedia, silahkan inputkan lagi");
            console.log("-------------------------------------------------------")
            boolean = false;
        }
    }
}