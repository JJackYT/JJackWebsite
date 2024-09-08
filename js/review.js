const reviews = [{'name':"Jack",'review':"This Website is great",'rating':5},{'name':"Katie",'review':"It sucks",'rating':1}]
const previousbtn = document.getElementById("previous-review")
const nextbtn = document.getElementById("next-review")
const reviewname = document.getElementById("review-name")
const reviewcontent = document.getElementById("review-text")
const stars = document.getElementsByClassName("star")

let currentreview = 0;

previousbtn.addEventListener("click",function (){
  currentreview -= 1;
  if (currentreview < 0){
    currentreview += reviews.length;
  }
  updatereview();
  console.log("working?");

})
nextbtn.addEventListener("click",function (){
  currentreview += 1;
  if (currentreview > reviews.length - 1){
    currentreview -= reviews.length;
  }
  updatereview();
})
function updatereview(){
  reviewname.textContent = reviews[currentreview]['name'];
  reviewcontent.textContent = reviews[currentreview]['review'];
  for (let i = 0; i < stars.length; i++){
    if (i  >= reviews[currentreview]['rating']){
      stars[i].style.backgroundColor = "black";

    }else{
      stars[i].style.backgroundColor = "Gold";
    }
  }
}
updatereview();
