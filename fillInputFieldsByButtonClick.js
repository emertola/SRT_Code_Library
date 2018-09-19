
var parentElement = document.getElementsByTagName("body")[0];
var childElementFill = document.getElementsByTagName("dynamic-fill-button");
var childElementRemove = document.getElementsByTagName("dynamic-remove-button");


if((childElementFill && childElementFill.length > 0) && (childElementRemove && childElementRemove.length > 0))  {
	parentElement.removeChild(childElementFill[0]);
	parentElement.removeChild(childElementRemove[0]);
	fillInputfieldsByButtonClick();
	removeInputfieldsByButtonClick();
} else {
	fillInputfieldsByButtonClick();
	removeInputfieldsByButtonClick();
}


function fillInputfieldsByButtonClick() {

	var newElem = document.createElement("dynamic-fill-button");
	var elemText = document.createTextNode("Fill-in Field Values");
	newElem.appendChild(elemText);
	var bodyTag = document.getElementsByTagName("body")[0];
	bodyTag.insertBefore(newElem, bodyTag.childNodes[0])


	var getNewElem = document.getElementsByTagName("dynamic-fill-button")[0];
	getNewElem.setAttribute("onClick", "fillFunc('ResumeForm')");
	getNewElem.setAttribute("style", "position: fixed; background-color: teal; color: white; padding: 5px; margin-top: 10px; cursor: pointer; top: 10px; left: 155px; z-index: 9999;")

	return true;


}


function fillFunc(formName) {

	let frmForm = document.getElementsByName(formName);
	let elems = frmForm[0].elements

	let counter = 1;

	let elemDisabled = (elem) => elem.disabled ? true : false;
	let elemReadonly = (elem) => elem.readOnly ? true : false;
	let elemIsVisible = (elem) => elem.offsetHeight > 0 ? true : false;

	for(var i = 0; i < elems.length; i++) {
		switch(elems[i].type) {
			case "text":
			case "textarea": {
				if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elems[i].value === "" && elemIsVisible(elems[i])) {
					elems[i].value = "fd" + counter;
					counter += 1;
				}
				break;
			}

			case "radio": {
				if(elemIsVisible(elems[i])) {
					var rdName = document.getElementsByName(elems[i].name);
					rdName[0].checked = true;
				}
				break;
				
			}

			case "checkbox" : {
				if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elemIsVisible(elems[i])) {
					elems[i].checked = true;
				}
				break;
			}

			case "select-one":
			case "select-multiple": {
				if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elems[i].value === "" && elemIsVisible(elems[i])) {
					const selIndex = elems[i].selectedIndex + 1;
					elems[i].selectedIndex = selIndex;
				}
				break;
			}
		}
	}
}


function removeInputfieldsByButtonClick() {

	var newElem = document.createElement("dynamic-remove-button");
	var elemText = document.createTextNode("Remove Field Values");
	newElem.appendChild(elemText);
	var bodyTag = document.getElementsByTagName("body")[0];
	bodyTag.insertBefore(newElem, bodyTag.childNodes[0])


	var getNewElem = document.getElementsByTagName("dynamic-remove-button")[0];
	getNewElem.setAttribute("onClick", "removeFunc('ResumeForm')");
	getNewElem.setAttribute("style", "position: fixed; background-color: #ef5350; color: white; padding: 5px; margin-top: 10px; cursor: pointer; top: 10px; left: 10px; z-index: 9999;")

	return true;


}


function removeFunc(formName) {
	let frmForm = document.getElementsByName(formName);
	let elems = frmForm[0].elements


	let counter = 1;

	let elemDisabled = (elem) => elem.disabled ? true : false;
	let elemReadonly = (elem) => elem.readOnly ? true : false;
	let elemIsVisible = (elem) => elem.offsetHeight > 0 ? true : false;

	for(var i = 0; i < elems.length; i++) {
		switch(elems[i].type) {
			case "text":
			case "textarea": {
				if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elems[i].value.length > 0 && elemIsVisible(elems[i])) {
					elems[i].value = ""
				}
				break;
			}

			case "radio": {
				if(elemIsVisible(elems[i])) {
					var rdName = document.getElementsByName(elems[i].name);
					for(var j = 0; j < rdName.length; j++) {
						if(!elemDisabled(elems[i])) {
							rdName[j].checked = false;
						}
					}
				}
				break;
			}

			case "checkbox" : {
				if(!elemDisabled(elems[i]) && elemIsVisible(elems[i])) {
					elems[i].checked = false;
				}
				break;
			}

			case "select-one":
			case "select-multiple": {
				if(!elemDisabled(elems[i]) && !elemReadonly(elems[i]) && elemIsVisible(elems[i])) {
					elems[i].selectedIndex = "";
				}
				break;
			}
		}
	}

}
