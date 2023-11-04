let animals = [ 
    {eng: "chicken", chr: "ji", chi: "ji", pin: "ji&#772;", yr: 2029},
    {eng: "cow", chr: "niu", chi: "niu", pin: "niu&#769;",  yr: 2021},
    {eng: "dog", chr: "gou", chi: "gou", pin: "gou&#780;",  yr: 2030},
    {eng: "dragon", chr: "long", chi: "long", pin: "lo&#769;ng", yr: 2024},
    {eng: "goat", chr: "yang", chi: "yang", pin: "ya&#769;ng", yr: 2027},
    {eng: "horse", chr: "ma", chi: "ma", pin: "ma&#780;", yr: 2026},
    {eng: "monkey", chr: "hou", chi: "houzi", pin: "ho&#769;uzi", yr: 2028,},
    {eng: "pig", chr: "zhu", chi: "zhu", pin: "zhu&#772;", yr: 2031},
    {eng: "rabbit", chr: "tu", chi: "tuzi", pin: "tu&#768;zi", yr: 2023},
    {eng: "rat", chr: "shu", chi: "laoshu", pin: "la&#780;oshu&#780;", yr: 2020},
    {eng: "snake", chr: "she", chi: "she", pin: "she&#769;", yr: 2025},
    {eng: "tiger", chr: "hu", chi: "laohu", pin: "la&#780;ohu&#780;", yr: 2022} 
];
// eng: English name 
//     - for concatenating animal image file 
//     - for sorting by English name
//     - for displaying English name of animal
// chr: Chinese character Romanized 
//     - for concatenating Chinese character image file
// chi: Chinese name (sometimes same as chr, sometimes longer)
//     - for  sorting by Chinese name
// pin: Pinyin spelling (Romanization w tone markings)
//     - for displaying Pinyin spelling of animal
// yr: in 12-year cycle
//     - for concatenating sets of years in 12 yr increments
//     - for sorting by Year