document.getElementsByClassName("fas")[0].addEventListener("click", ()=>{
    document.getElementById("column1").style.width = '100%';
    document.getElementById("column2").style.width = '100%';
    document.getElementById("column3").style.width = '100%';
    document.getElementById("column4").style.width = '100%';
})
document.getElementsByClassName("fas")[1].addEventListener("click", ()=>{
    document.getElementById("column1").style.width = '50%';
    document.getElementById("column2").style.width = '50%';
    document.getElementById("column3").style.width = '50%';
    document.getElementById("column4").style.width = '50%';
})
document.getElementsByClassName("fas")[2].addEventListener("click", ()=>{
    document.getElementById("column1").style.width = '25%';
    document.getElementById("column2").style.width = '25%';
    document.getElementById("column3").style.width = '25%';
    document.getElementById("column4").style.width = '25%';
})
