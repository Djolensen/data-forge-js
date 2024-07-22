// Importujem pakete

const dataForge = require('data-forge');require('data-forge-fs');

// Pravimo DataFrame
const df1 = new dataForge.DataFrame({
    columnNames:["id", "names", "gender", "age"],
    rows:[
        [1,"Djordje","Musko",25],
        [2,"Tamara","Zensko",35],
        [3,"Nikola","Musko",26],
        [4,"Nemanja","Musko",27],
        [5,"Marija","Zensko",15],
    ]
})

 console.log(df1.toJSON());

// Prikaz

