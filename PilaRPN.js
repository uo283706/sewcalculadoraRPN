class PilaRPN{


    //constructor
    constructor(){
        this.info = [];
        this.tamaño = -1;
    }

    //métodos

    size(){
        return this.tamaño+1;
    }

    isVacia(){
        return this.tamaño < 0;
    }

    pushPila(x) {
        
        this.info.push(x);
        this.tamaño += 1;
    }

    popPila(){
        if(!this.isVacia()){
            this.tamaño -= 1;
            return this.info.pop();
        }
       
    }

    getPila(x){
        if(x >= this.size()-1){
            return this.info[x];
        }
    }

    vaciarPila(){
        let i;
        for(i = 0; i<this.size();i++){
            this.info.pop();
           
        }

        this.tamaño = -1;
    }

    printPila(x){
        var y;
        var aux = [];
        let cadena = "";
        let i;
        var a = "";
        for(i = this.size(); i>0;i--){
            y = this.info.reverse().pop();
            cadena += " ("+ i + ": \t" + y +") \n";
            aux.push(y);
           
        }

        for(i = this.size(); i>0;i--){
            y = aux.pop();
            this.info.push(y);
        }

        if (x.size() == 0){
            return;
        } 

       return cadena;
       
    }

}

