var namesOfpeople = [];

function enviar()
{
    var GuestName = document.getElementById("name1").value;
    namesOfpeople.push(GuestName);

    console.log(GuestName);

    console.log(namesOfPeople);
    var lengthOfName = namesOfPeople.length;
    console.log(lenghtOfName);
    document.getElementById("resposta1").innerHTML=namesOfPeople.toString();
}
function mostrar()
{
    var i=namesOfpeople.join("br");
    console.log(namesOfpeople);
    document.getElementById("resposta2").innerHTML=i.tostring();
    document.getElementById("sortbutton").style.display="block";
}
function pesquisar()
{
    var s=document.getElementById("name2").value;
    var found=0;
    var j;
    for(j=0; j<namesOfpeople.lenght;j++)
    {

    
    if(s==namesOfPeople[j]){
        found=found+1;
    
    }
}
document.getElementById("resposta3").innerHTML="nome encontrado "+found+"vez(es)";
console.log("Nome encontrado"+found+" vez(es)");
}