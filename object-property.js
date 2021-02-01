const student = [
    {id: 21, name: 'kajol'},
    {id: 23, name: 'sabana'},
    {id: 25, name: 'manna'},
    {id: 20, name: 'rasel'},
]
// const NameStore = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i].name;
//     NameStore.push(element);
// }
// console.log(NameStore);

//*** store name from array into names var using map
const names = student.filter(x => x.id > 23);
console.log(names);