
let namEL=document.getElementById('name-el')
let passcoDE =document.getElementById('passcod-e')
let coHort = document.getElementById('cohor-t')
let firstData = document.getElementById('firstdat-a')
let secondData = document.getElementById('secondat-a')




function Newquiz(){
let name = ( prompt('enter your name'))
let passcode = prompt('enter your passcord')
let cohort = prompt('enter your cohort')
let firstdata =  prompt('enter your first data type')
let secondata = prompt('enter your second data type')
passcoDE.textContent = `Passcode : ${passcode}`
namEL.textContent = `Name : ${name}`
coHort.textContent = `Cohort : ${cohort}`
// let firsTYPE = firstdata


if(isNaN(firstdata) ) {
    firstData.textContent = `your first data type is : NaN`
    // firstData.textContent = "your first data type is :" + ' ' +  typeof(parseInt(firsTYPE))
} else if(firstdata){
    
    firstData.textContent ="your first data type is :" + ' ' +  typeof(firstdata)
}else {
    // firstData.textContent = "your first data type is :" + ' ' + NaN =
    let firsTYPE=parseInt(firstdata)
    firstData.textContent = "your first data type is :" + ' ' +  typeof(firsTYPE)
}

// firstData.textContent = "your first data type is :" + ' ' + typeof(firstdata )
secondData.innerHTML =  "your second data type is :" + ' ' + typeof(secondata) 


}

