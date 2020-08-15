const students = [
    {id: 21, name: 'Samia Farid'},
    {id: 31, name: 'Jameelaa'},
    {id: 41, name: 'Aklimaa'},
    {id: 21, name: 'Mostafa'}
]

var newArray = [];
for (var i = 0; i < students.length; i++) {
    var element = students[i];
    var loveName = element.name;
    newArray.push(loveName);    
}

console.log(newArray); 

