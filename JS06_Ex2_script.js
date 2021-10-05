// JS-06 DOM Manipulation
// Exercise #2

// Write a JavaScript function to get the values of First and Last name from the following form.
// Print out the names to the console.



function getFormvalue() {
    const formDetail = document.getElementById("form1")
    const fName = formDetail.elements['fname']
    const lName = formDetail.elements['lname']

    let firstName = fName.value
    let lastName = lName.value
    
    console.log(`${firstName} ${lastName}`)
}

