function fillInputFields(formName, hasDatepicker) {
	const frmForm = document.getElementsByName(formName);
	// frmForm[0].reset();

	const elems = frmForm[0].elements
	let valCounter = 1;

	for(var i = 0; i < elems.length; i++) {
		const elemType = elems[i].type.toLowerCase();
		const elemReadOnly = elems[i].readOnly ? true : false;
		const elemDisabled = elems[i].disabled ? true : false;
		const elemNoValue = elems[i].value ? true : false;
		const getDateElem = elems[i].className.split(" ").filter((dateClass) => {return dateClass === hasDatepicker});
		const checkIfDate = getDateElem.length > 0 ? true : false;
		const isVisible = elems[i].offsetHeight > 0 ? true : false;

		switch(elemType) {
			case "text": {
				if(!elemDisabled && !elemReadOnly && !elemNoValue && elems[i].id !== "signature" && isVisible) {
					elems[i].value = "fd" + valCounter;
					valCounter += 1;
				}
				break;
			}

			case "textarea": {
				if(!elemDisabled && !elemReadOnly && !elemNoValue && elems[i].id !== "signature" && isVisible) {
					elems[i].value = "fd" + valCounter + "\r\ntest newline";
					valCounter += 1;
				}
				break;
			}

			case "select-one": {
				if(!elemDisabled && !elemReadOnly && !elemNoValue) {
					const selIndex = elems[i].selectedIndex + 1;
			        elems[i].selectedIndex = selIndex;
				}
				break;
			}

			case "checkbox": {
				if(!elemDisabled && !elems[i].checked) {
					elems[i].checked = true;
				}
				break;
			}

			case "radio": {
				if(!elemDisabled && !elemReadOnly) {
					elems[i].checked = true;
				}
				break;
			}

			default: {
				// default handler
			}
		}
	}
	return true;

}


fillInputFields("frmForm", "hasDatepicker")
