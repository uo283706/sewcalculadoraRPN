class CalculadoraRPN{

    
    constructor(pila){
        this.pila = pila;
    }
    
    

   //Método que hace que se muestre la infomación en la pila
    mostrarPantalla(){
        if(!this.pila.isVacia()){
            document.querySelector('textarea[name=\"pantalla\"]').innerHTML = this.pila.printPila(this.pila);
            
        }
       
        
    }

    punto(){
        document.querySelector('input[type=text][name=\"actual\"]').value += ".";
    }

    número(x){
        
       document.querySelector('input[type=text][name=\"actual\"]').value += x;
        
    }

    add(){
        if(this.pila.size() >= 2){
            this.pila.pushPila(this.pila.popPila()+this.pila.popPila());

            this.mostrarPantalla();
        }
    }


    sub(){
        if(this.pila.size() >= 2){
            this.pila.pushPila(this.pila.popPila()-this.pila.popPila());
            this.mostrarPantalla();
        }

    }


    mult(){

        if(this.pila.size() >= 2){
            this.pila.pushPila(this.pila.popPila()*this.pila.popPila());
            this.mostrarPantalla();
        }

    }

    div(){

        if(this.pila.size() >= 2){
           
            this.pila.pushPila(this.pila.popPila()/this.pila.popPila());
            this.mostrarPantalla();
           
        }

    }

    sin(){

        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.sin(this.pila.popPila()));
            this.mostrarPantalla();
        }

    }

    cos(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.cos(this.pila.popPila()));
            this.mostrarPantalla();
        }

    }

    tan(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.tan(this.pila.popPila()));
            this.mostrarPantalla();
        }


    }

    asin(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.asin(this.pila.popPila()));
            this.mostrarPantalla();
        }

    }

    atan(){

        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.atan(this.pila.popPila()));
            this.mostrarPantalla();
        }

    }

    acos(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.acos(this.pila.popPila()));
            this.mostrarPantalla();
        }

    }

    cambiaSigno(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(this.pila.popPila() * (-1));
            this.mostrarPantalla();
        }

    }

    raiz(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.sqrt(this.pila.popPila()));
            this.mostrarPantalla();
        }
    }

    log(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.log10(this.pila.popPila()));
            this.mostrarPantalla();
        }
    }

    exp(){
        if(this.pila.size() >= 1){
            this.pila.pushPila(Math.exp(this.pila.popPila()));
            this.mostrarPantalla();
        }
    }

    calcula(){
       this.pila.pushPila(Number(document.getElementById('actual').value));
       document.querySelector('input[type=text][name=\"actual\"]').value = "";
       this.mostrarPantalla();
    }

    empty(){
       this.pila.vaciarPila();
       document.querySelector('input[type=text][name=\"actual\"]').value = "";
       document.querySelector('textarea[name=\"pantalla\"]').innerHTML = "";
    }

}



var pila = new PilaRPN();
var calculadoraRPN = new CalculadoraRPN(pila);



document.addEventListener('keydown', function (event) {
    if (event.key === '+') {
        calculadoraRPN.add();
    }
    if (event.key === '-') {
        calculadoraRPN.sub();
    }
    if (event.key === 'd') {
        calculadoraRPN.div();
      }
    if (event.key === 'x') {
        calculadoraRPN.mult();
    }
    if (event.key === '.') {
        calculadoraRPN.punto();
    }
    if (event.key === 's') {
        calculadoraRPN.cambiaSigno();
    }
    if (event.key === 'n') {
        calculadoraRPN.sin();
    }
    if (event.key === 'c') {
        calculadoraRPN.cos();
    }
    if (event.key === 't') {
        calculadoraRPN.tan();
    }
    if (event.key === 'r') {
        calculadoraRPN.raiz();
    }
    if (event.key === 'h') {
        calculadoraRPN.asin();
    }
    if (event.key === 'j') {
        calculadoraRPN.acos();
    }
    if (event.key === 'k') {
        calculadoraRPN.atan();
    }
    if(event.key >= '0' && event.key <= '9'){

        calculadoraRPN.número(Number(event.key));

    }
    if (event.key === 'l') {
        calculadoraRPN.log();
    }
    if (event.key === 'p') {
        calculadoraRPN.exp();
    }
    //Enter de la calculadora RPN
    if(event.key === 'Enter'){ 
        event.preventDefault();
        calculadoraRPN.calcula();
    }
    if(event.key === 'Delete'){
        event.preventDefault();
        calculadoraRPN.empty();
    }
    
  
  });

