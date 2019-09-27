function outputRadius() {
var radius=document.getElementById("sphereForm").elements["radius"].value;
var ans=4/3*Math.PI*radius**3;
document.getElementById("keepForm").innerHTML=("The answer is " + ans.toFixed(3));

}

