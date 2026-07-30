let text = "Web Design";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,150);
  }
}
type();

function toggleMenu(){
    document.getElementById("menuBox").classList.toggle("active");
}

document.querySelectorAll("#menuBox a").forEach(function(link){
    link.addEventListener("click", function(){
        document.getElementById("menuBox").classList.remove("active");
    });
});
