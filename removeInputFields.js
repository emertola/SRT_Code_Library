function removeInputFields(formName, hasDatepicker) {
	const frmForm = document.getElementsByName(formName);
	// frmForm[0].reset();

	const elems = frmForm[0].elements
	let valCounter = 1;

	// console.log(elems)

	for(var i = 0; i < elems.length; i++) {
		const elemType = elems[i].type.toLowerCase();

		switch(elemType) {
			case "text":
			case "textarea": {
				elems[i].value = ""
			}

			case "select-one": {
		        elems[i].selectedIndex = -1;
		    }

			case "checkbox": {
				elems[i].checked = false;
			}

			case "radio": {
				elems[i].checked = false;
			}

			default: {
				// console.log("hello")
			}
		}
	}
	return true;

}


removeInputFields("frmForm", "hasDatepicker")
