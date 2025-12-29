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