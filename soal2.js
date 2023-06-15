let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  }
  
  const prompt = require('prompt-sync')({sigint: true});
  console.log("===========Menghitung jumlah kuantitas produk===========");
  
  ulang = false;
  while(ulang==false){
    //Pada soal masukkan kode produk FBR00040101
    console.log("--------------------------------------------------------");
    var kodeProduk = prompt("Masukkan kode produk : "); 
    var totalQuantity = 0;
    for(var i = 0; i<productBin.data.length; i++){
      if(productBin.data[i].productCode==kodeProduk){
        totalQuantity += productBin.data[i].quantity;
        var nama = productBin.data[i].productName;
      }else{
        console.log("Kode produk tidak tersedia")
        break;
      }
    }
    console.log("Jumlah kuantitas produk "+nama+" sebanyak "+totalQuantity);
    console.log("========================================================")
    
    penutup =false;
    while(penutup==false){
      console.log("Apakah ingin menghitung kuantitas lagi?\n1. Ya \n2. Tidak");
      const pilih = prompt("Masukkan pilihan: ")
      if(pilih==1){
        penutup=true;
        penutup=true;
        ulang = false;
      }else if (pilih ==2){
        console.log("-------------------------------------------------------")
        console.log("Program ditutup, terimakasih");
        penutup=true
        ulang = true;
      }else{
        console.log("Pilihan tidak tersedia, silahkan inputkan lagi");
        console.log("-------------------------------------------------------")
        penutup = false;
      }
    }
  }