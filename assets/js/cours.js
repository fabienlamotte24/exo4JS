/*Déclaration fonction identity*/
function identity() {
/*Déclaration des variable*/
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  var regex = /^[a-zA-Z\-éèîç]+$/;
  /*Boite de dialogue avec appel des variables*/
  if((regex.test(lastname) == true) && (regex.test(firstname) == true) && (regex.test(city) == true)){
    alert('Nom: ' + lastname + '\nPrenom: ' + firstname + '\nVille: ' + city);
  }else{
    alert('Recommencez avec des caractères corrects');
  }
}
