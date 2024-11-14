let categoria=["Instructor", "Asistente", 
    "Agregado","Asociado", "Titular"];
let profesores=[
    {categoria:1, cedula:111, nombre:"Manuel", sexo: "M"},
    {categoria:5, cedula:555, nombre:"Karla", sexo: "F"},
    {categoria:3, cedula:333, nombre:"Pancracio", sexo: "M"},
    {categoria:4, cedula:888, nombre:"Elizabeth", sexo: "F"},
    {categoria:2, cedula:222, nombre:"Rafael", sexo: "M"},
    {categoria:5, cedula:666, nombre:"Juan", sexo: "M"},
    {categoria:1, cedula:444, nombre:"Laura", sexo: "F"},
    {categoria:4, cedula:777, nombre:"Mario", sexo: "M"},
    {categoria:3, cedula:999, nombre:"Eduardo", sexo: "M"},
    {categoria:2, cedula:100, nombre:"Simón", sexo: "M"},
    {categoria:5, cedula:110, nombre:"Miguel", sexo: "M"},
];

let profesoresCategoria= (profesores, categoria, sexo) => {
    let profesoresCategoria=0;
    let profesoresSexo=0;
    profesores.forEach((profesor) => {
        if(profesor.categoria==categoria){
            profesoresCategoria++;
            if(profesor.sexo==sexo) profesoresSexo++;
        }
    });
    return {profesoresCategoria, profesoresSexo};
};


let porcProfesSexoEnCategoria= ({profesoresCategoria, profesoresSexo}) =>{
    return (profesoresSexo/profesoresCategoria)*100;
}
let salida= document.getElementById("salida");
salida.innerHTML= `Porcentaje de profesores masculinos de la categoria ${categoria[4]}: <br><br>`
salida.innerHTML+= `${porcProfesSexoEnCategoria(profesoresCategoria(profesores, 5, "M")).toFixed(2)}%`