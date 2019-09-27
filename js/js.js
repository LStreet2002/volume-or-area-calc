function sphere(){
    var radius = document.getElementById("sphereId").value;
    var result = (4/3)*Math.PI*radius**3;
    document.getElementById("sphereTitle").innerHTML = "Sphere Volume: "+result;
}

function cube(){
    var length = document.getElementById("cubeId").value;
    var result = length**3;
    document.getElementById("cubeTitle").innerHTML = "Cube Volume: "+result;
}

function triangle(){
    var base = document.getElementById("triangleId1").value;
    var height = document.getElementById("triangleId2").value;
    document.getElementById("triangleTitle").innerHTML = "Triangle Area: "+(base/2)*height;
}

function pyramidVolume(){
    var base = document.getElementById("pyrId1").value;
    var height = document.getElementById("pyrId2").value;
    document.getElementById("pyramidTitle").innerHTML = "Pyramid Volume: "+(base**2 /3)*height;
}
function pyramidVolumeTriangle(){
    var heightTri = document.getElementById("pyrTri").value;
    document.getElementById("pyramidTitleTri").innerHTML = "Regular Triangular Based Pyramid Volume: "+ (heightTri**3) / (6*Math.sqrt(2));
}

function cylinderVolume(){
    var radius = document.getElementById("cylR").value;
    var length = document.getElementById("cylL").value;
    document.getElementById("cylTitle").innerHTML = "Cylinder Volume: "+ Math.PI*(radius**2)*length;
}