
var parentElement = document.getElementsByTagName("body")[0];
var childElement = document.getElementsByTagName("dynamic-remove-button");


if(childElement && childElement.length > 0) {
	parentElement.removeChild(childElement[0]);
	fillInputfieldsByButtonClick();
} else {
	fillInputfieldsByButtonClick();
}


function fillInputfieldsByButtonClick() {

	var newElem = document.createElement("dynamic-remove-button");
	var elemText = document.createTextNode("Remove Field Values");
	newElem.appendChild(elemText);
	var bodyTag = document.getElementsByTagName("body")[0];
	bodyTag.insertBefore(newElem, bodyTag.childNodes[0])


	var getNewElem = document.getElementsByTagName("dynamic-remove-button")[0];
	getNewElem.setAttribute("onClick", "removeFunc()");
	getNewElem.setAttribute("style", "background-color: #ef5350; color: white; padding: 5px; margin-top: 10px; cursor: pointer; position: relative; top: 10px; left: 10px; z-index: 9999;")

	return true;


}


function removeFunc() {
	var pageID = prompt('Please enter the page ID')

	if(pageID) {

		var stage = document.getElementById("stage" + pageID).querySelectorAll("input, select, textarea")

		let counter = 1;

		const elemDisabled = (elem) => elem.disabled ? true : false;
		const elemReadonly = (elem) => elem.readOnly ? true : false;

		for(var i = 0; i < stage.length; i++) {
			switch(stage[i].type) {
				case "text":
				case "textarea": {
					if(!elemDisabled(stage[i]) && !elemReadonly(stage[i]) && stage[i].value.length > 0) {
						stage[i].value = ""
					}
				}

				case "radio": {
					var rdName = document.getElementsByName(stage[i].name);
					for(var j = 0; j < rdName.length; j++) {
						if(!elemDisabled(stage[i])) {
							rdName[j].checked = false;
						}
					}
				}

				case "checkbox" : {
					if(!elemDisabled(stage[i])) {
						stage[i].checked = false;
					}
				}

				case "select-one":
				case "select-multiple": {
					if(!elemDisabled(stage[i]) && !elemReadonly(stage[i])) {
						stage[i].selectedIndex = -1;
					}
				}
			}
		}
	}
	

}