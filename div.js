function divisor()
{
    let a = document.getElementById("i");
    let b = document.getElementById("o");
    let resultado = document.getElementById("resultado");

    let va = parseInt(a.value);
    let vb = parseInt(b.value);
    if(va<vb){
        let c = va;
        va = vb;
        vb = c;
    }
    while(vr!=0){
        let vr = va%vb;
        va=vb;
        vb=vr
        if(vr>0){
            let r = vr;
        }
        
    }
    resultado.textContent = r;
}