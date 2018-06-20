function stringCapitalize(str) {
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }

  return str.join(" ");
}

function capitalizeFieldValues(arrayFieldID) {
  if (arrayFieldID.length < 1) {
    console.log("No field(s) entered!");
    return false;
  }

  for (var fdID = 0; fdID < arrayFieldID.length; fdID++) {
    document.getElementById(arrayFieldID[fdID]).value = stringCapitalize(
      document.getElementById(arrayFieldID[fdID]).value
    );
  }
  return true;
}

// Uncomment below to run the function.

// capitalizeFieldValues(["id1"]) // if only 1 id
// capitalizeFieldValues(["id1", "id2"]) // if only 2 ids, and so on...
