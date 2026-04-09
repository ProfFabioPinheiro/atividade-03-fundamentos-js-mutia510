const nome = "murilo";
function ok(nome,hora){
    if(hora>= 0 && hora <= 6){
        console.log("boa madruga " + nome);
        
    }else if(hora >= 7 && 19 >= hora){
        console.log("boa tarde " + nome);
        
    }else 
        console.log("boa noite " + nome);
        
}
ok(nome,22);