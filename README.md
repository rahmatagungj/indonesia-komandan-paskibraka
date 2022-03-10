# Komandan Paskibraka

Dalam kasus ini kamu perlu menghitung jumlah orang yang berada pada setiap baris pasukan paskibraka. Misalnya ada `5 baris` dan setiap barisnya terdapat `4` orang, maka bentuk formasinya adalah:

    | 1  | 2  | 3  | 4  | 5  |
    | 6  | 7  | 8  | 9  | 10 |
    | 11 | 12 | 13 | 14 | 15 |
    | 16 | 17 | 18 | 19 | 20 |

Sebagai komandan, kamu akan menghitung jumlah orang dan menampilkan namanya yang berada antara orang pertama (`yang sudah ditentukan`) hingga orang terakhir (`yang sudah ditentukan`).

### Input

```js
member = [
  ["Budi", "Julio", "Dito", "Yudha"],
  ["Agung", "Udin", "Fitri", "Ridho"],
  ["Alfa", "Budi", "Caca", "Dito"],
  ["Eko", "Firman", "Gede", "Hendra"],
  ["Icha", "Julio", "Kaca", "Lulu"],
]

firstPerson = "Julio"
lastPerson = "Hendra"
```

### Output

```js
{
  totalPerson: 13, // jumlah orang yang berada antara orang pertama dan orang terakhir
  listOfPerson: [
    "Dito",
    "Yudha",
    "Agung",
    "Udin",
    "Fitri",
    "Ridho",
    "Alfa",
    "Budi",
    "Caca",
    "Dito",
    "Eko",
    "Firman",
    "Gede",
  ] // nama orang yang berada antara orang pertama dan orang terakhir
} 
```

## Instructions

1. Kamu harus menyelesaikan fungsi `findAndCountPeople` pada file `komandanPaskibraka.js` untuk menghitung jumlah orang yang berada antara orang pertama dan orang terakhir.
2. Nilai yang dikembalikan adalah jumlah orang yang berada antara orang pertama dan orang terakhir beserta nama-nama orang tersebut.
3. Jalankan program dengan menggunakan printah `node run`
