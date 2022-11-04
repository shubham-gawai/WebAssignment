function validation(e){
    e.preventDefault();
    var first_name=document.getElementById('first_name').value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var telephone = document.getElementById("telephone").value;
    var bio = document.getElementById("bio").value;
    
    var first_namecheck=/^[A-Za-z. ]{3,18}$/;
    var last_namecheck = /^[A-Za-z. ]{3,18}$/;
    var passwordcheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/;
    var emailcheck = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var biocheck = /^[ a-z_-]{8,50}$/;
    var telephonecheck =
      /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;

// references to change the border color to check, if the input is valid or not 
    var firstColor = document.getElementById("first_name");
    var lastColor = document.getElementById("last_name");
    var emailColor = document.getElementById("email");
    var passwordColor = document.getElementById("password");
    var telephoneColor = document.getElementById("telephone");
    var bioColor = document.getElementById("bio");
    var submitColor = document.getElementById("submitButton");
      
      if(first_namecheck.test(first_name)){
          document.getElementById('firsterror').innerHTML ="";
          firstColor.style.border = "1.6px solid green";
      }
      else {
          document.getElementById('firsterror').innerHTML =
          "First name must contain alphabets 3-18 characters";
          firstColor.style.border = "1.6px solid red";
      }
      if (last_namecheck.test(last_name)) {
        document.getElementById("lasterror").innerHTML = "";
        lastColor.style.border = "1.6px solid green";
      } else {
        document.getElementById("lasterror").innerHTML =
          "Last name must contain alphabets 3-18 characters";
          lastColor.style.border = "1.6px solid red";
      }
       if (emailcheck.test(email)) {
         document.getElementById("emailerror").innerHTML = "";
         emailColor.style.border = "1.6px solid green";
       } else {
         document.getElementById("emailerror").innerHTML =
           "Enter valid email, e.g. example@example.com";
           emailColor.style.border = "1.6px solid red";
       }

       if (passwordcheck.test(password)) {
         document.getElementById("passerror").innerHTML = "";
         passwordColor.style.border = "1.6px solid green";
       } else {
         document.getElementById("passerror").innerHTML = 
         "Enter a valid strong password length 6-20"
         // "Password must contain atleast 1 uppercase,lowercase,digit,special char (length 6-20)";
         passwordColor.style.border = "1.6px solid red";
       }

       if(telephonecheck.test(telephone)){
        document.getElementById("telephoneerror").innerHTML="";
        telephoneColor.style.border = "1.6px solid green";
       }
       else {
        document.getElementById("telephoneerror").innerHTML = 
        "Enter a valid telephone number";
        telephoneColor.style.border = "1.6px solid red";
       }


       if(biocheck.test(bio)){
        document.getElementById("bioerror").innerHTML="";
        bioColor.style.border = "1.6px solid green";
       }
       else {
        document.getElementById("bioerror").innerHTML = 
        "bio must contain lowercase  8-50 characters";
        bioColor.style.border = "1.6px solid red";
       }


// if all the fields are correct means border for all input fields are green then the submit button should turn green in backgroung(success) :
        if((firstColor.style.border == "1.6px solid green") && (lastColor.style.border == "1.6px solid green") && (emailColor.style.border == "1.6px solid green") && (passwordColor.style.border == "1.6px solid green") && (telephoneColor.style.border == "1.6px solid green") && ( bioColor.style.border == "1.6px solid green")){
        
          submitColor.style.backgroundColor = "darkgreen";
        } 
} 

document.getElementById("submit").addEventListener("keyup",validation);