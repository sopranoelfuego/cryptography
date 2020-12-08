// variable
var message=document.getElementById("message")
var q=document.getElementById("param_q")
var p=document.getElementById("param_p")
var parametre_n=document.getElementById("param_n")
var param_d=document.getElementById("param_d")
var paramtre_e=document.getElementById("param_e")
var form_q_p=document.getElementById("form_q_p")
var form_e_d=document.getElementById("form_e_d")
var form_sms_chif_Dechif=document.getElementById("form_sms_chif_Dechif")
var message=document.getElementById("message")
var errorTaker=document.getElementById("errorTaker")
var convertir_chiffre=document.getElementById("convertir_chiffre")
var effacer=document.getElementById("effacer")
var reconvertir_lettre=document.getElementById("reconvertir_lettre")
var chiffrer=document.getElementById("chiffrer")
var dechiffrer=document.getElementById("dechiffrer")
var sms=""
var messageLettreEspace=''
var messageChiffreEspace=''
var messageNumberWithSpacing=[] //this variable will contain number of decrypted arra
var messageCrypted=[]
var messageDecripted=[]

var param_fi_n=''
var tin=[]


var lettreCaracter=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"
     ,1,2,3,4,5,6,7,8,9,0," ,",".","?"," ' ","!"," "]
var nombreCorrespondat=[00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,
        19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,
        39,40,41 ]
// =======================generation des nombre premier
console.log("la taille de lettreCaracter:",lettreCaracter.length)
console.log("la taille de nommbreCorrespondat :",nombreCorrespondat.length)

const nombrePremier= ()=>{
    var count=0
    var taker=[]
    for(var i=100;i<=200;i++){
        count=0
        for(var j=1;j<=i;j++){
            if(i%j==0){
              count++
            }

        }
        if(count==2){
                taker.push(i)
        }
        

    }
    return taker

}
// ======================choix d'un nombre premier
const getNombrePremier=()=>{
        var taker=nombrePremier()   //retourne  le tableau des nombre premiers
        return taker[Math.floor(Math.random() * 21)]

}
var t=nombrePremier()
console.log("nombre hasard :",t[Math.floor(Math.random() * 21)])

// ==============pgcd pour voir si leur pgcd est de 1

const pgcd=(A,B)=>{
    var count=0
    if(A % B ==0){
        return false
    }
    if(A>B){
        
        for(var i=1;i<=A;i++){
            if(A%i==0){
                if(B%i==0)
                    count++
            }
        }
        if(count==1)
        return true
        else return false
    }

}

// ==============calcul de l'inverse-===
const calculate_inverse=(a,b)=>{
    for(var i=1;i<=b;i++){
        if(((a*i)-1)%b==0){
            return i
        }
    }
    if(i==b){
        return false
    }

}
//   ========methode qui crypte une lettre seulement

// ==========================================CRYPTAGE DECRYPTAGE==============
const cryptedSingleLetter=(m,e,n)=>{
    if(m==0)
      return 0
    var power=Math.pow(m,e)
    var a=power % n
    return a
    }
// this function decrypte a letter of messageCrypted
const decryptedSingleLetter=(hm,d,n)=>{
   if(hm==0){
    return 0

   }
         var power=Math.pow(hm,d)
    var a=power % n
    return a
}
console.log("decrypte 16100 d=7423 n=20143 :",Math.pow(0,7423)%20143 )
// this function return decrypted message
const decrypteMessage=(hashMessage,d,n)=>{
    var tab=[]
    for(var i=0;i<hashMessage.length;i++){
      
        messageDecripted.push(decryptedSingleLetter(hashMessage[i],d,n))
    }
    return messageDecripted
    
  }
// =======crypte un message cette methode permet de crypt un message il faut donne la valeur e et n====

const cryptedMessage=(message,e,n)=>{
    var tab=[]
    for(var i=0;i<message.length;i++){
      
        messageCrypted.push(cryptedSingleLetter(message[i],e,n))
    }

    return messageCrypted
  }
// ================================================================================
// ==================calcule de fi(n)=(p-1)(q-1)
const calculate_fi=(a,b)=>{
                      
    return (a-1)*(b-1)

    
}
// ==========conversion du message en nombre (avant action)
const convertirEnnombre=(message)=>{
    var tab=[]

    var recup=""
    if(message === Number){
        tab.push[message]
    }
    for(var i=0;i<message.length;i++){
         recup = lettreCaracter.indexOf(message[i])

         tab.push(nombreCorrespondat.find(nombre=>nombre == nombreCorrespondat[recup]))

         

    }
    return tab
  } 
// =========reconversion du message en chiffre en lettre donc va nous permet de retourne le nombre en chaine de caracteres
const reconvertirEnLettre=(messageChiffre)=>{
    var tab=[]
    var recup=""
    
    for(var i=0;i<messageChiffre.length;i++){
        // recup=nombreCorrespondat.indexOf(messageChiffre[i])
        // tab.push(lettreCaracter.find(lettre =>lettre == messageChiffre[i]))
        tab.push(lettreCaracter[messageChiffre[i]])
    }
    return tab

}
console.log("message en lettre des nombre [20,21,22,23,24,25]",reconvertirEnLettre([20,21,22,23,24,25]))
//   ========message en chiffre
const messageEnchiffre=()=>{
    sms=message.value
  const smsEchiffre=convertirEnnombre(sms)
  message.value=smsEchiffre
  
}
// =====retourne d'un message en chiffre en lettre
const retourneEnMessageLettre=()=>{
    var messageEnchiffre=messageLettreEspace
    var messsageToArray=[]
    for(var i=0;i<messageEnchiffre;i++){
    messsageToArray.push(messageEnchiffre[i]) 
          }

    const messageClaire=reconvertirEnLettre(messsageToArray)
    message.value=messageClaire
}
console.log("message en chiffre :",convertirEnnombre("aubin".trim()).toString())

// =====================eventHandles================
    // e doit etre inferieur a n et leur pgcd doit etre 1
const handleEchangeEvent=()=>{
    var e=paramtre_e.value
    const param_fi_n=calculate_fi(p.value,q.value)
 
    console.log("parametre e et n :",e,param_fi_n)
    if(e>param_fi_n){
        errorTaker.innerHTML="<small style='color:red'>e doit etre inferieur au parametre fi(n)</small>"
    }
       
    if(pgcd(param_fi_n,e)){
        errorTaker.innerHTML="<small style='color:blue'>valid value</small>"
       
    }else{
        errorTaker.innerHTML="<small style='color:red'>e doit etre premier avec n</small>"
        paramtre_e.value=""
    }
}
// inverse de e mod n =d
const generate_d=()=>{
    var e=paramtre_e.value
    var param_n=parametre_n.value
    var inverse=calculate_inverse(e,param_n)
    param_d.value=inverse

}
// ======================eventListens====


form_q_p.addEventListener('submit',(e)=>{
   e.preventDefault()

   p.value=getNombrePremier()
   q.value=getNombrePremier()
   while(q===p){
   q.value=getNombrePremier()
   e.preventDefault()
   e.preventDefault()


   }
   parametre_n.value=p.value*q.value
})

//this method update the text area by letters to numbers(donc convertit chaque lettre en son chiffre correspondant)
form_sms_chif_Dechif.addEventListener("submit",(e)=>{
    e.preventDefault()
    sms=message.value.trim().split('')//ici il a le message avec espacement de  ""
    messageLettreEspace=sms
    console.log("message with split methode",sms)
    console.log("message with join methode ",sms.join(""))

        const smsEchiffre=convertirEnnombre(sms)
        console.log("message converti en nombre en ",smsEchiffre)
        messageChiffreEspace=smsEchiffre
        message.value=smsEchiffre.join('') //ici le message avec espacement est enlever
        e.preventDefault()

})
// this method update and set the value of textArea to ""
effacer.addEventListener('click',(e)=>{
    e.preventDefault()
    message.value=""
})
form_e_d.addEventListener("submit",e=>{
    e.preventDefault()
 
})
reconvertir_lettre.addEventListener('click',e =>{
    e.preventDefault()
    const lettres=reconvertirEnLettre(messageChiffreEspace)
    message.value=lettres.join("")
    // message.value=messageLettreEspace.join("")
})

// =======chiffre un message 
chiffrer.addEventListener('click',e =>{
    e.preventDefault()
    var param_E=paramtre_e.value
    var param_N=parametre_n.value
  messageNumberWithSpacing = cryptedMessage(messageChiffreEspace,param_E,param_N)
  console.log("message crypte messageNumberWithSpacing ",messageNumberWithSpacing)
    message.value=messageNumberWithSpacing.join("")
   e.preventDefault()
})
// =======dechiffre un message
// variable messageNumberWithSpacing contient le message crypte 
dechiffrer.addEventListener('click',e =>{
    e.preventDefault()
    var inverse=param_d.value
    var param_N=parametre_n.value
    var messageDecripte=decrypteMessage(messageNumberWithSpacing,inverse,param_N)
    console.log("messageDecripte le message en chiffre decript",messageDecripte)
    var messageAnouveauClaire=reconvertirEnLettre(messageDecripte)
    message.value=messageAnouveauClaire.join("")
    message.value=sms.join("")
    console.log("message a nouveau claire ",messageAnouveauClaire)
    
})