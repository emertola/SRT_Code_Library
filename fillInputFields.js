function fillInputFields(formName, hasDatepicker) {
	const frmForm = document.getElementsByName(formName);
	// frmForm[0].reset();

	const elems = frmForm[0].elements
	let valCounter = 1;

	console.log(elems)

	for(var i = 0; i < elems.length; i++) {
		const elemType = elems[i].type.toLowerCase();
		const elemReadOnly = elems[i].readOnly ? true : false;
		const elemDisabled = elems[i].disabled ? true : false;
		const getDateElem = elems[i].className.split(" ").filter((dateClass) => {return dateClass === hasDatepicker});
		const checkIfDate = getDateElem.length > 0 ? true : false;

		switch(elemType) {
			case "text":
			case "textarea": {
				if(!elemDisabled && !elemReadOnly && elems[i].value === "" && !checkIfDate && elems[i].id !== "signature") {
					elems[i].value = "fd" + valCounter;
					valCounter += 1;
				}
			}

			case "select-one": {
				if(!elemDisabled && !elemReadOnly && elems[i].value === "") {
					const selIndex = elems[i].selectedIndex + 1;
			        elems[i].selectedIndex = selIndex;
				}
			}

			case "checkbox": {
				if(!elemDisabled && !elems[i].checked) {
					elems[i].checked = true;
				}
			}

			case "radio": {
				if(!elemDisabled && !elemReadOnly) {
					elems[i].checked = true;
				}
			}

			default: {
				// console.log("hello")
			}
		}
	}

}

// Note: This will not affect those fields that are readonly, disabled, date fields with class="hasDatepicker"

// Uncomment the next line to run the function
// fillInputFields("frmForm", "hasDatepicker")