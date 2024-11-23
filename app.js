document.getElementById("start").onclick =  () => {
    document.getElementById("leftw").style.opacity = "1";
    document.getElementById("topw").style.opacity = "1";
    document.getElementById("bottomw").style.opacity = "1";
    document.getElementById("rightw").style.opacity = "1";
    document.getElementById("one").style.opacity = "1";
    document.getElementById("two").style.opacity = "1";
    document.getElementById("end").style.top = "78%"
    document.getElementById("end").style.left = "85%"
    document.getElementById("fin").style.opacity = "0"
}

document.getElementById("leftw").addEventListener("mouseover", () => {
    document.getElementById("leftw").style.opacity = "0";
    document.getElementById("topw").style.opacity = "0";
    document.getElementById("bottomw").style.opacity = "0";
    document.getElementById("rightw").style.opacity = "0";
    document.getElementById("one").style.opacity = "0";
    document.getElementById("two").style.opacity = "0";
    document.getElementById("end").style.top = "100%"
    document.getElementById("end").style.left = "100%"
})

document.getElementById("topw").addEventListener("mouseover", () => {
    document.getElementById("leftw").style.opacity = "0";
    document.getElementById("topw").style.opacity = "0";
    document.getElementById("bottomw").style.opacity = "0";
    document.getElementById("rightw").style.opacity = "0";
    document.getElementById("one").style.opacity = "0";
    document.getElementById("two").style.opacity = "0";
    document.getElementById("end").style.top = "100%"
    document.getElementById("end").style.left = "100%"
})

document.getElementById("bottomw").addEventListener("mouseover", () => {
    document.getElementById("leftw").style.opacity = "0";
    document.getElementById("topw").style.opacity = "0";
    document.getElementById("bottomw").style.opacity = "0";
    document.getElementById("rightw").style.opacity = "0";
    document.getElementById("one").style.opacity = "0";
    document.getElementById("two").style.opacity = "0";
    document.getElementById("end").style.top = "100%"
    document.getElementById("end").style.left = "100%"
})

document.getElementById("rightw").addEventListener("mouseover", () => {
    document.getElementById("leftw").style.opacity = "0";
    document.getElementById("topw").style.opacity = "0";
    document.getElementById("bottomw").style.opacity = "0";
    document.getElementById("rightw").style.opacity = "0";
    document.getElementById("one").style.opacity = "0";
    document.getElementById("two").style.opacity = "0";
    document.getElementById("end").style.top = "100%"
    document.getElementById("end").style.left = "100%"
})

document.getElementById("one").addEventListener("mouseover", () => {
    document.getElementById("leftw").style.opacity = "0";
    document.getElementById("topw").style.opacity = "0";
    document.getElementById("bottomw").style.opacity = "0";
    document.getElementById("rightw").style.opacity = "0";
    document.getElementById("one").style.opacity = "0";
    document.getElementById("two").style.opacity = "0";
    document.getElementById("end").style.top = "100%"
    document.getElementById("end").style.left = "100%"
})

document.getElementById("two").addEventListener("mouseover", () => {
    document.getElementById("leftw").style.opacity = "0";
    document.getElementById("topw").style.opacity = "0";
    document.getElementById("bottomw").style.opacity = "0";
    document.getElementById("rightw").style.opacity = "0";
    document.getElementById("one").style.opacity = "0";
    document.getElementById("two").style.opacity = "0";
    document.getElementById("end").style.top = "100%"
    document.getElementById("end").style.left = "100%"
})

document.getElementById("end").onclick =  () => {
    document.getElementById("leftw").style.opacity = "0";
    document.getElementById("topw").style.opacity = "0";
    document.getElementById("bottomw").style.opacity = "0";
    document.getElementById("rightw").style.opacity = "0";
    document.getElementById("one").style.opacity = "0";
    document.getElementById("two").style.opacity = "0";
    document.getElementById("end").style.top = "100%"
    document.getElementById("end").style.left = "100%"
    document.getElementById("fin").style.opacity = "1"
}