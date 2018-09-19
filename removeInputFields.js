function removeInputFields(formName, hasDatepicker) {
	const frmForm = document.getElementsByName(formName);
	// frmForm[0].reset();

	const elems = frmForm[0].elements
	let valCounter = 1;

	// console.log(elems)

	for(var i = 0; i < elems.length; i++) {
		const elemType = elems[i].type.toLowerCase();
		const isVisible = elems[i].offsetHeight > 0 ? true : false;

		switch(elemType) {
			case "text":
			case "textarea": {
				if(isVisible) {
					elems[i].value = "";
				}
				
				break;
			}

			case "select-one": {
				if(isVisible) {
					elems[i].selectedIndex = "";
				}
		        
		        break;
		    }

			case "checkbox": {
				if(isVisible) {
					elems[i].checked = false;
				}
				
				break;
			}

			case "radio": {
				if(isVisible) {
					var rdName = document.getElementsByName(elems[i].name);
					for(var j = 0; j < rdName.length; j++) {
						rdName[j].checked = false;
					}
				}
				
				break;
			}

			default: {
				// console.log("hello")
			}
		}
	}
	return true;

}


removeInputFields("frmForm", "hasDatepicker")
