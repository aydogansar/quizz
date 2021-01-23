/**
 *  * -------- types ------------
 *
 *  * multiple : Çoktan Seçmeli
 *  * gap-filling: Boşluk Doldurma
 *  * pairing: Eşleştirme
 */

export const questions = [
    // {
    //     type: 'multiple',
    //     question: 'Aşağıdakiler hangisi aşağıda değildir?',
    //     choices: [
    //         'Burada',
    //         'Yok burada',
    //         'Hayır burada',
    //         'Eskişehir',
    //         'Antep',
    //         'Antalya',
    //     ],
    //     correct: 'Eskişehir',
    // },
    // {
    //     type: 'multiple',
    //     question: 'Hangisi Karadenizde bir ilimizdir ?',
    //     choices: ['Uşak', 'Antep', 'Samsun', 'Antalya'],
    //     correct: 'Samsun',
    // },
    // {
    //     type: 'gap-filling',
    //     question: 'Aşağıdaki boş alanlara uygun kelimeleri yazınız',
    //     sentences: [
    //         "Türkiye'nin başkenti {{Ankara}}'dır.",
    //         '{{Kaplumbağa}} en uzun yaşayan hayvandır.',
    //     ],
    // },
    {
        type: 'pairing',
        question: 'Aşağıdakileri eşleştirin',
        list1: [
            'a',
            'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem I-.Lorem I-Lorem I-Lorem I-Lorem I-Lorem I-Lorem I-',
            'c',
            'd',
            'e',
        ],
        list2: [
            '1',
            'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.',
            '3',
            '4',
            '5',
        ],
    },
]
