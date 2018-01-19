function fillInputFields(formName, hasDatepicker) {
	const frmForm = document.getElementsByName(formName);
	// frmForm[0].reset();

	const elems = frmForm[0].elements
	let valCounter = 1;

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
	return true;

}

// function enterMagicWord() {
// 	var runFunc = prompt("Please enter the magic word: ");
// 	var magicWord = runFunc.toLowerCase();

// 	if(magicWord === "magic") {
// 		fillInputFields("frmForm", "hasDatepicker")
// 	} else {
// 		if(confirm("Invalid magic word! Please try again.") === true) {
// 			enterMagicWord()
// 		}
// 	}
// }

// enterMagicWord()

// Please enter "magic" when the input box appear


fillInputFields("frmForm", "hasDatepicker")
