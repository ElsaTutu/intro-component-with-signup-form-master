function validateForm(){
  console.log('submit');
	var firstName = document.forms["myForm"]["firstname"].value;
	var lastName = document.forms["myForm"]["lastname"].value;
	var email = document.forms["myForm"]["email"].value;
	var password = document.forms["myForm"]["password"].value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


	if (firstName.length<1) {
        document.getElementById('error-firstName').innerHTML = " First Name cannot be empty";
        document.getElementsByName('firstname')[0].placeholder=' ';
        
    }
    if (lastName.length<1) {
        document.getElementById('error-lastName').innerHTML = " Last Name cannot be empty";
        document.getElementsByName('lastname')[0].placeholder=' ';
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Looks like this is not an email";    
        document.getElementsByName('email')[0].placeholder='email@example/com';  
    }
    if (password.length<1) {
        document.getElementById('error-password').innerHTML = " Password cannot be empty";
        document.getElementsByName('password')[0].placeholder=' ';
    }   
          
    if(firstName.length<1 || lastName.length<1 || email.length<1 || !filter.test(email.value) || password.length<1){
       	return false;
    }            
}
