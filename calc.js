function insert(num){
    var numero = document.getElementById('visor').value;
    document.getElementById('visor').value = numero + num;
}
function clean(){
    document.getElementById('visor').value = "";
}
function back(){
    var resultado = document.getElementById('visor').value;
    document.getElementById('visor').value = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('visor').value;
    if(resultado){
        document.getElementById('visor').value = eval(resultado);
    }
    else{
        document.getElementById('visor').value = "Nada a calcular."
    }
}
