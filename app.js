anime({
  targets: 'article ul',
  translateY: -20,
  opacity: 1,
  delay: anime.stagger(80)
});
var firstTime = true;
var message = "Cool. You tried it!";
var later = "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the Commit Message says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n"
function MouseoverMessageInAlertBox()
{
   if(firstTime) { alert(message); }
   else { alert(later); }
   firstTime = false;
}
function imgClicked(){
	imgClicked.count += 1;
	if(imgClicked.count===10){
		var v = document.getElementById("profile_image");
		v.className += "spinner";
	}
	if(imgClicked.count===11){
		var v = document.getElementById("profile_image");
		v.classList.remove("spinner");
		imgClicked.count=1;
	}
}
imgClicked.count = 0;
