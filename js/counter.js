const btn_decrease = document.getElementById("decrease");
const btn_reset = document.getElementById("reset");
const btn_increase = document.getElementById("increase");
const lbl_count = document.getElementById("Count")

let count = 0;

btn_decrease.addEventListener("click",function (){
  count -= 1;
  UpdateCount();
});
btn_increase.addEventListener("click",function (){
  count += 1;
  UpdateCount();
});
btn_reset.addEventListener("click",function (){
  count = 0;
  UpdateCount();
});

function UpdateCount(){
  lbl_count.textContent = count;
  if (count > 0) {
    lbl_count.style.color = "#33ff33";
  }else if (count < 0){
    lbl_count.style.color = "red";
  }else{
    lbl_count.style.color = "white";
  }
}

UpdateCount();
