
var parentElement = document.getElementsByTagName("body")[0];
var childElement = document.getElementsByTagName("dynamic-fill-button");


if(childElement && childElement.length > 0) {
	parentElement.removeChild(childElement[0]);
	fillInputfieldsByButtonClick();
} else {
	fillInputfieldsByButtonClick();
}


function fillInputfieldsByButtonClick() {

	var newElem = document.createElement("dynamic-fill-button");
	var elemText = document.createTextNode("Click to run the function");
	newElem.appendChild(elemText);
	var bodyTag = document.getElementsByTagName("body")[0];
	bodyTag.insertBefore(newElem, bodyTag.childNodes[0])


	var getNewElem = document.getElementsByTagName("dynamic-fill-button")[0];
	getNewElem.setAttribute("onClick", "fillFunc('ResumeForm')");
	getNewElem.setAttribute("style", "background-color: teal; color: white; padding: 5px; margin-top: 10px; cursor: pointer; position: relative; top: 10px; left: 10px; z-index: 9999;")

	return true;


}


function fillFunc(formName) {
	// var pageID = prompt('Please enter the page ID')

	// if(pageID) {
		
		// var stage = document.getElementById("stage" + pageID).querySelectorAll("input, select, textarea")
		const frmForm = document.getElementsByName(formName);
		const elems = frmForm[0].elements

		let counter = 1;

		const elemDisabled = (elem) => elem.disabled ? true : false;
		const elemReadonly = (elem) => elem.readOnly ? true : false;
		const elemIsVisible = (elem) => elem.offsetHeight > 0 ? true : false;

		for(var i = 0; i < elems.length; i++) {
			switch(elems[i].type) {
				case "text":
				case "textarea": {
					if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elems[i].value === "" && elemIsVisible(elems[i])) {
						elems[i].value = "fd" + counter;
						counter += 1;
					}
				}

				case "radio": {
					if(elemIsVisible(elems[i])) {
						var rdName = document.getElementsByName(elems[i].name);
						rdName[0].checked = true;
					}
					
				}

				case "checkbox" : {
					if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elemIsVisible(elems[i])) {
						elems[i].checked = true;
					}
				}

				case "select-one":
				case "select-multiple": {
					if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elems[i].value === "" && elemIsVisible(elems[i])) {
						const selIndex = elems[i].selectedIndex + 1;
						elems[i].selectedIndex = selIndex;
					}
				}
			}
		}

	// } 
	

}