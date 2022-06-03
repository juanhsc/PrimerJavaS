function cliente (nombre, saldo) {
    this.nombre=nombre;
    this.saldo=saldo;
    this.depositar=depositar;
    this.extraer=extraer;
    this.consultarSaldo=consultarSaldo;
}
function depositar(dineroMas) {
    this.saldo =this.saldo +dineroMas;
}
function extraer (dineroMenos){
    this.saldo=this.saldo-dineroMenos;
}
function consultarSaldo (){
    this.saldo=this.saldo;
}

let resultado = window.confirm("Bienvenido al simulador bancario, quiere realizar una prueba??");
if (resultado === true)
{
    window.alert("ok, vamos a realizarla");
}else{
            window.alert("vamos a realizarla igualmente")
        }
    
        





let cliente1;

cliente1=new cliente(this.nombre=prompt("Escriba el nombre"), this.saldo=parseInt(prompt("Escriba el saldo")));
document.write('Nombre del cliente:' +"    "+  cliente1.nombre + " '<br>'   ");
document.write('Monto Actual de la cuenta :' + cliente1.saldo+"$"+" '<br>'   ");

cliente1.depositar(parseInt(prompt("monto a depositar")));
document.write("Con su deposito su cuenta quedo en "+ cliente1.saldo+" '<br>'   ");

cliente1.extraer(parseInt(prompt("Monto a Extraer")));
document.write( "Con su extraccion su cuenta quedo en " + cliente1.saldo+" '<br>'   " );
cliente1.consultarSaldo()
document.write("monto actual  "+ cliente1.saldo);
