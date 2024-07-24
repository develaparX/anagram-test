// Mendefinisikan kelas untuk mengelompokkan anagram
class AnagramGrouper {
    constructor(words) {
        if (!Array.isArray(words) || !words.every(word => typeof word === 'string')) {
            throw new Error('Input harus berupa array dari string');
        }
        this.words = words; // Menyimpan kata-kata input
        this.anagramMap = {}; // Inisialisasi objek kosong untuk menyimpan anagram
    }

    // Fungsi pembantu untuk mengurutkan karakter-karakter dari sebuah string
    #sortString(str) {
        return str.split('').sort().join('');
    }

    // Fungsi untuk mengelompokkan anagram
    groupAnagrams() {
        // Iterasi untuk setiap kata dalam array input
        for (let i = 0; i < this.words.length; i++) {
            const word = this.words[i]; // Kata saat ini
            const sortedWord = this.#sortString(word); // Versi yang diurutkan dari kata

            // Jika versi yang diurutkan belum menjadi kunci dalam map, tambahkan
            if (!this.anagramMap[sortedWord]) {
                this.anagramMap[sortedWord] = [];
            }

            // Tambahkan kata saat ini ke array yang sesuai dengan kunci yang diurutkan
            this.anagramMap[sortedWord].push(word);
        }

        // Inisialisasi array kosong untuk menyimpan hasil
        const result = [];

        // Iterasi untuk setiap kunci dalam map anagram
        for (const key in this.anagramMap) {
            // Periksa jika kunci adalah properti dari objek anagramMap
            if (this.anagramMap.hasOwnProperty(key)) {
                // Tambahkan array dari anagram ke array hasil
                result.push(this.anagramMap[key]);
            }
        }

        return result; // Mengembalikan anagram yang telah dikelompokkan
    }
}

// Contoh penggunaan
const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const grouper = new AnagramGrouper(words);
console.log(grouper.groupAnagrams());
