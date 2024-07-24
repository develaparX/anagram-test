# Anagram Grouper

Project ini mengelompokkan array dari string menjadi kumpulan anagram menggunakan kelas JavaScript. Anagram adalah kata atau frasa yang dibentuk dengan mengatur ulang huruf dari kata atau frasa lain, biasanya menggunakan semua huruf asli tepat sekali.

## Ringkasan

Fungsi utama disediakan oleh Class `AnagramGrouper`, yang berisi method untuk mengurutkan string dan mengelompokkan anagram.

## Class: AnagramGrouper

### Constructor

Constructor menerima array dari kata-kata dan menginisialisasi objek dengan kata-kata input dan objek kosong untuk menyimpan anagram.

```javascript
constructor(words) {
  if (!Array.isArray(words) || !words.every(word => typeof word === 'string')) {
    throw new Error('Input harus berupa array dari string');
  }
  this.words = words;
  this.anagramMap = {};
}
```
### Method: #sortString
Method membantu untuk mengurutkan karakter-karakter dari sebuah string. Ini digunakan untuk menghasilkan kunci yang konsisten untuk anagram.

```javascript
#sortString(str) {
  return str.split('').sort().join('');
}
```
### method: groupAnagrams
method ini mengelompokkan kata-kata input menjadi anagram dan mengembalikan hasilnya sebagai array dari array.

1. Iterasi untuk setiap kata: Untuk setiap kata dalam array input, metode ini menghasilkan versi kata yang diurutkan.
2. Periksa apakah kata yang diurutkan adalah kunci: Jika versi kata yang diurutkan belum menjadi kunci dalam peta, tambahkan.
3. Tambahkan kata ke peta: Kata saat ini ditambahkan ke array yang sesuai dengan kunci yang diurutkan.
4. Siapkan hasil: Setelah memproses semua kata, metode ini membuat array dari array dari peta anagram dan mengembalikannya.

```javascript
groupAnagrams() {
  for (let i = 0; i < this.words.length; i++) {
    const word = this.words[i];
    const sortedWord = this.#sortString(word);

    if (!this.anagramMap[sortedWord]) {
      this.anagramMap[sortedWord] = [];
    }

    this.anagramMap[sortedWord].push(word);
  }

  const result = [];
  for (const key in this.anagramMap) {
    if (this.anagramMap.hasOwnProperty(key)) {
      result.push(this.anagramMap[key]);
    }
  }

  return result;
}
```