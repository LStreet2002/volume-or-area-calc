function sphere(){
    var radius = document.getElementById("sphereId").value;
    var result = (4/3)*Math.PI*radius**3;
    document.getElementById("h1").innerHTML = "Sphere volume: "+result;
}

function cube(){
    var length = document.getElementById("cubeId").value;
    var result = length**3;
    document.getElementById("h2").innerHTML = "Cube volume: "+result;
}

function triangle(){
    var base = document.getElementById("triangleId1").value;
    var height = document.getElementById("triangleId2").value;
    document.getElementById("h3").innerHTML = "Triangle area: "+(base/2)*height;
}

function pyramidVolume(){
    var base = document.getElementById("pyrId1").value;
    var height = document.getElementById("pyrId2").value;
    document.getElementById("pyramidTitle").innerHTML = "Pyramid Volume: "+(base**2 /3)*height;
}
function pyramidVolumeTriangle(){
    var baseTri = document.getElementById("pyrId1Tri").value;
    var heightTri = document.getElementById("pyrId2Tri").value;
    document.getElementById("pyramidTitleTri").innerHTML = "Regular Triangular Based Pyramid Volume: "+ (3/2)*baseTri*heightTri;
}