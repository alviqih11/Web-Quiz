const DB_QUIZ = [
    {
        // slide: "Pertanyaan Ke 1 Dari 3 Soal",
        question: "Siapa Lelaki Paling Tampan Di Dunia?",
        answers: ['Jaenudin', 'Liminho', 'Lemonilo', 'Fadil', 'jungkook']
    },

    {
        // slide: "Pertanyaan Ke 2 Dari 3 Soal",
        question: "Jika Fadil kembali ke 28 oktober untuk mengubah sumpah pemuda, teks sumpah pemuda akan diubah menjadi?",
        answers: ['Sumpah Aku Cinta Kamu', 'Sumpah mati aku rasa', 'Jawaban C benar', 'Semua Jawaban Salah', 'Aku cinta kamu']
    },

    {
        // slide: "Pertanyaan Ke 3 Dari 3 Soal",
        question: "Apa Bahasa indonesia nya naon?",
        answers: ['Apa?', 'Bagaimana', 'Gimana?','Mungkin', 'Semua jawaban koplok']
    }
     
]

const mulai= document.querySelector('#mulai');
const buttonStart = document.querySelector('#mulai button');
const quiz = document.querySelector('#quiz');
const pg = document.querySelectorAll('.pg');
const button = document.querySelector('.button');
const listNumber = document.querySelectorAll('.listNumber');


// Ketika button mulai di klik
// buttonStart.addEventListener('click', function () {
//     mulai.style.display = 'none';
//     quiz.style.display = 'block';
   

// })




// memecah array untuk memberi style kepada pg
for (const p of pg) {

           
          
           p.addEventListener('click', function () {
           pg.forEach(function(p) {
            if (p.classList.contains('bg-[#279b24]')) {
                p.classList.remove('bg-[#279b24]'); 
             }  
           })
            p.classList.add('bg-[#279b24]');
          
        })
       
}




let current_q = 0;
let i = 1;
// Tampilan Pertama Ketika Di Load
document.addEventListener("DOMContentLoaded", function(event) { 

    setupJawaban()
});

function setupJawaban() {

document.querySelectorAll('.listNumber')[current_q].classList.add('bg-yellow-400');
document.querySelector('.slide').innerText = `Pertanyaan Ke ${i} Dari 3 Soal`;
document.getElementById('question').innerText = DB_QUIZ[current_q]['question'];
document.getElementById('choiceText0').innerText = DB_QUIZ[current_q]['answers'][0]
document.getElementById('choiceText1').innerText = DB_QUIZ[current_q]['answers'][1]
document.getElementById('choiceText2').innerText = DB_QUIZ[current_q]['answers'][2]
document.getElementById('choiceText3').innerText = DB_QUIZ[current_q]['answers'][3]
document.getElementById('choiceText4').innerText = DB_QUIZ[current_q]['answers'][4]


}


// Ketika Tombol Next Di Klik dan cek skor jika user sudah mengerjakan sampai akhir


button.addEventListener('click', function() {
 
    
    listNumber.forEach(function(number) {
        if (number.classList.contains('bg-yellow-400')) {
            number.classList.remove('bg-yellow-400'); 
         }  
       })

    pg.forEach(function(p) {
        if (p.classList.contains('bg-[#279b24]')) {
            p.classList.remove('bg-[#279b24]'); 
         }  
       })


       
    simpanJawaban()
    if (current_q > DB_QUIZ.length -1) {
        cekSkor()
        document.querySelector('#selesai').style.display = 'block';
        document.querySelector('#quiz').style.display = 'none';

        document.querySelector('#totalSkore').innerHTML = "Skore Kamu..." + totalSkore;

    } 
    resetState()
    setupJawaban()
    
 
});

function resetState() {
    const jawabanDipilih = document.querySelector('input[name="choices"]:checked') 
    if (jawabanDipilih != null) {
        jawabanDipilih.checked = false
    }
}

// Codingan untuk no soal 


// Menyimpan Jawaban User
let jawabanUser = [];
const jawabanBenar = [3,2,0]
function simpanJawaban() {
    const jawaban = document.querySelector('input[name="choices"]:checked');

    if (jawaban != null) {
        jawabanUser.push(parseInt(jawaban.getAttribute('data-id')))
        current_q++
        i++
        document.querySelectorAll('.listNumber')[current_q -1].classList.add('bg-[#279b24]');
    } else {
        current_q++
        i++
        
    }
    
}

// cek nilai total 
let totalSkore = 0;
function cekSkor() {
    for (let i = 0; i < jawabanUser.length; i++) {
        if (jawabanUser[i] === jawabanBenar[i]) {
           totalSkore += 100
        }
        
    }
}




