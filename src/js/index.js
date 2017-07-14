var lodash = require('lodash');
var $ = require('jquery');

var description;
var descriptionTitle;
var descriptionSubTitle;


$(document).ready(()=>{
	description = $(".description")
	descriptionTitle = $(".description .name h1")
	descriptionSubTitle = $(".description .project")
	console.log("ready")
	$(".escuela .marker .mainIcon").click((e)=>{
		clickOnMarker($(e.currentTarget).parent());
	})
	$(".btn").click((e)=>{
		console.log("cclickkkkkk on ", $(e.currentTarget))
		clickOnIcon($(e.currentTarget));
	})
	changeBodySize(descriptionTitle, descriptionTitle.parent(), 60)
	changeBodySize(descriptionSubTitle, descriptionSubTitle.parent(), 20)
})

function clickOnMarker(target){
	var all = $(".marker");
	$.each(all, ()=>{
		all.removeClass("selected");
	})
	target.addClass("selected");
	//description.addClass("")
	//console.log("hit on",target.parent())
	var escuela = getClassParent(target.parent(),"escuela")
	removeJustOneClass(description,"description");
	description.addClass(escuela);
	
	changeTitleText(escuela);
	changeSubTitleText(target.parent());

	changeBodySize(descriptionTitle, descriptionTitle.parent(), 60)
	changeBodySize(descriptionSubTitle, descriptionSubTitle.parent(), 20)
}

function clickOnIcon(target){
	var all = $(".btn");
	$.each(all, ()=>{
		all.removeClass("selected");
	})
	target.addClass("selected");
}

function changeDescriptionBodySize(){
	var text = $(".description .name h1")
	$(".description .name").css("width", (text.width() +60)+"px")
	//console.log("text",text.width() +10)
	//console.log("description",$(".description").width())
}

function changeBodySize(textW, target, size){
	target.css("width", (textW.width() +size)+"px")
	//console.log("text",text.width() +10)
	//console.log("description",$(".description").width())
}

function removeJustOneClass(object, keepClass){
	var classes = object.prop('class').split(' ');
	classes.splice( classes.indexOf(keepClass), 1 );
	object.removeClass(classes[0]);
}

function getClassParent(object, keepClass){
	var classes = object.prop('class').split(' ');
	classes.splice( classes.indexOf(keepClass), 1 );
	return classes[0];
}

function changeTitleText(nText){
	descriptionTitle.text("escuela "+nText);
}

function changeSubTitleText(target){
	var nText = target.attr("val");
	descriptionSubTitle.text(nText);
}





