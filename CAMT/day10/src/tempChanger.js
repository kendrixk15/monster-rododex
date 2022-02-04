// // function celToFah(num){
// //     const fah = (num-32)*5/9
// //     return fah
// // }

// const celToFah = (num) => {
//     const fah = (num-32)*5/9
//     return fah
// }

// const fahToCel = (num) => {
//     const cel = (num*9/5)+32
//     return cel
// }

// // function fahToCel(num){
// //     const cel = (num*9/5)+32
// //     return cel
// // }

// export{
//     celToFah,
//     fahToCel
// }

const conCelToFah= (cel) => (cel-32) * 5/9
const conFahToCel=(fah)=>(fah*9/5) +32

export{
    conCelToFah,
    conFahToCel
}