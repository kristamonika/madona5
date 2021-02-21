window.onload=function(){
    var sviests=document.getElementById("vieta");
    if (sviests.getContext) {
        var zim=sviests.getContext("2d");
        zim.fillRect(10,10,130,130);
       

        zim.beginPath();
        zim.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        zim.moveTo(110, 75);
        zim.strokeStyle="blue";
        zim.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        zim.moveTo(65, 65);
        zim.strokeStyle="blue";
        zim.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        zim.moveTo(95, 65);
        zim.strokeStyle="blue";
        zim.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        zim.stroke();
        }
}