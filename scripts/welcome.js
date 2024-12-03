alert("Benvenuto")
let username=prompt("Come ti chiami?")
if (username !== "") {
    alert("Ciao, " + username + "!") 
    document.getElementById("username").textContent = "Ciao " +username // inserisce il nome dell'utente nella pagina
} else {        
    alert("Non hai inserito il tuo nome")
}

let i=0
while(i<3){
    alert( "Numero di tentativi: " + i)
    i++
}