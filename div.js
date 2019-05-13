function div()
{
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let resultado = document.getElementById("resultado");
    var result = "O resultado é";
    let va = parseInt(a.value);
    let vb = parseInt(b.value);
    if(vb>va){
      var bolha = va;
      va = vb;
      vb = bolha;
    }
    var i = va%vb;
    result += i ;
    va=vb;
    vb=i;
    while(i > 0){
      i = va%vb;
      if(i!=0){
        result += "," + i ;
      }
      va=vb;
      vb=i;
      
    }
    result += ".";
   
    resultado.textContent = result;
}
