

function validateForm() {
 var x = document.forms["myform"]["fname"].value;
 var y = x.length;
    if (y <= 3 || y >=20) {
    alert("Enter a Valid Name: A name should be more than 3 and less than 20 leters");
    }

}
