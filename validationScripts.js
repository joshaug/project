
function Func1(){ 
	
 
	year = document.getElementsByName("year")[0], 
	month = document.getElementsByName("month")[0], 
	day = document.getElementsByName("day")[0]; 
	box = document.getElementById("myCheck");

	var d = new Date(); 

		
	var n = 2099;
		 for (var i = n; i >= 1901; i--) { 
			var x = new Option(); 
			x.value = x.text = i; 
			year.add(x); 
		} 
	 
	month.addEventListener("change", numofdays); 
	function numofdays() { 
		var  m = month.value, d = day.value;
		
		var leap =year.value%4;
		
		if ((m == "9") || (m=="4") || (m=="6") || (m=="11"))
		 
			var mlength = 30;
		else if	(m=="2" && leap!="0")
			var mlength = 28;
		
		else if (m=="2" && leap=="0")
				var mlength =29;
		else 
			var mlength = 31
		
        
		 
		day.length=0;
		for (var i = 1; i <= mlength; i++) { 
		var x = new Option(); 
		x.value = x.text = i;
		  if (i == d) x.selected = true;
		day.add(x); } 
		}
	 
	numofdays();
	
	//today = new Date();
	dob = new Date(year.value, month.value-1, day.value);	
}


function checkForm(form)

  {
	  
//^(\d{7})([A-Z]{1,2})$/i;
	 
	 var cb = document.getElementById("myCheck").checked; //checkbox
     var today, someday;
	 today = new Date();
	 // dob = new Date(year.value, month.value-1, day.value);


	 
	var message;
    
	//var fe = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	//var fe = /\S+@\S+\.\S+/;
    var re = /^(0)(\d{2})(\d{7})$/i; // phone numbers start with the 0 prefix and have a nsn length of 9
	var nf = /^[a-zA-Z]+$/i;
	var nl = /^[a-zA-Z ']+$/i;
	
	if (form.First_Name.value.match(nf)) {

		}
		else{
			alert('Valid first name is required.');
			form.First_Name.focus();
			return false;
		}
		
	if (form.Last_Name.value.match(nl)) {

		}
		else{
			alert('Valid last name is required.');
			form.First_Name.focus();
			return false;
		} 
			
	
		
			if (form.Email_Address.value.indexOf("@") < 1 || form.Email_Address.value.indexOf(".") < 1) {
						alert('Please enter a valid email address.');
						form.Email_Address.focus();
						return false;}
				else{	
					if(form.Password.value == '') {
						alert("Please give a valid password.");
						form.Password.focus();
						 return false;
					}
					else{
						
						if(form.Pass_confirm.value == '') {
							alert("Please confirm password.");
							form.Pass_confirm.focus();
							 return false;
							}
						else{
							if(form.Password.value != form.Pass_confirm.value) {
								alert("Passwords do not match.");
								//form.Email_Address.focus();
								return false;
							}
							else{

								if(form.Phone.value.match(re)) {

									}
								else
								{
								  alert("Valid Irish Number only " );
								  //form.Phone.focus();
								  return false;
								}
								if(cb==false){
									alert("Please check box to register.");
									return false;
								}
								if(year.value=="" || month.value==""){
									alert("Please fill in DOB.");
									return false
								}
								if((today-dob)<567648000000){
									alert("Date of Birth indicates you are under 18.");
									return false;
								}
							
						}				
					}				
				}	
			}
		

	
    
	message = "Your details have been registered.\n";
	message += "Name: " + form.First_Name.value + " "+form.Last_Name.value +"\n";
	message += "Email: " + form.Email_Address.value+"\n";
	message += "DOB: " + dob+"\n";
	message += "Thank You";
	alert(message);    	
	return true;
	form.elementName.value
	
  }