<p id="Rezolvare2">x $ y = z</p>
<script>
function Problema2(){
    var x = parseFloat(prompt('x= '));
    var y = parseFloat(prompt('y= '));
    var z = parseFloat(prompt('z= '));
    if(x + y == z){

        document.getElementById("Rezolvare2").innerHTML = + x + "+" + y + "=" + z;
    }
    else if(x - y == z){
        
        document.getElementByid("Rezolvare2").innerHTML = + X + "-" + y + "=" + z;
    }
    else if(x * y == z){
        document.getElementByid("Rezolvare2").innerHTML = + X + "*" + y + "=" + z;
    }
    else if(x / Y == z){
        document.getElementByid("Rezolvare2").innerHTML = + X + "/" + y + "=" + z;

    }
    else{
        document.getElementByid("Rezolvare2").innerHTML = "Operatia nu se poate desfasura";
    }
    
}
</script>
<button type="button" onclick="Problema2()">Problema2</button>