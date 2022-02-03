// const normal = document.getElementById("normal");
// const res = document.getElementById("hid");
function show() 
{
    document.getElementById('sho').style.display = 'none';
    document.getElementById('hid').style.display = 'block';
    document.getElementById('normal').style.display = 'block';
}

function hide() 
{
    document.getElementById('sho').style.display = 'block';
    document.getElementById('hid').style.display = 'none';
    document.getElementById('normal').style.display = 'none';
}

// let pic = document.getElementById("imgid");
let pics = [
    "1.jpg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg" ];

let i = 0;
function slide()
{
document.getElementById("imgid").src = pics[i];
    if(i<(pics.length-1)){
        i++;
        // console.log(pics[i]);
    }
    else
        i=0;
}
setInterval(slide,2000)


// function show() {
//     var x = document.getElementById("normal");
//     // var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
