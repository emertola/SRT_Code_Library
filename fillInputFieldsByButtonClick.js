
var newElem = document.createElement("dynamicbutton");
var elemText = document.createTextNode("Click to run the function");
newElem.appendChild(elemText);
var bodyTag = document.getElementsByTagName("body")[0];
bodyTag.insertBefore(newElem, bodyTag.childNodes[0])


var getNewElem = document.getElementsByTagName("dynamicbutton")[0];
getNewElem.setAttribute("onClick", "runFunc()");
getNewElem.setAttribute("style", "background-color: teal; color: white; padding: 5px; margin-top: 10px; cursor: pointer; position: relative; top: 10px; left: 10px; z-index: 9999;")

function runFunc() {
	var pageID = prompt('Please enter the page ID')
	console.log("You've entered: " + pageID)

	var stage = document.getElementById("stage" + pageID).querySelectorAll("input, select, textarea")
	console.log(stage)

	let counter = 1;

	const elemDisabled = (elem) => elem.disabled ? true : false;
	const elemReadonly = (elem) => elem.readOnly ? true : false;

	for(var i = 0; i < stage.length; i++) {
		switch(stage[i].type) {
			case "text":
			case "textarea": {
				if(!elemDisabled(stage[i]) && !elemReadonly(stage[i]) && stage[i].value === "") {
					stage[i].value = "fd" + counter;
					counter += 1;
				}
			}

			case "radio": {
				var rdName = document.getElementsByName(stage[i].name);
				rdName[0].checked = true;
			}

			case "checkbox" : {
				if(!elemDisabled(stage[i]) && !elemReadonly(stage[i])) {
					stage[i].checked = true;
				}
			}

			case "select-one":
			case "select-multiple": {
				if(!elemDisabled(stage[i]) && !elemReadonly(stage[i]) && stage[i].value === "") {
					const selIndex = stage[i].selectedIndex + 1;
					stage[i].selectedIndex = selIndex;
				}
			}
		}
	}

}
