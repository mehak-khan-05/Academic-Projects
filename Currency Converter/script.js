const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdown = document.querySelectorAll(".dropdown select")
const btn=document.querySelector("form button")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")
const msg=document.querySelector(".msg")

// for (let code in countryList) {
//     console.log(code,countryList[code])
// }


let i = 0
for (let select of dropdown) {
    for (let code in countryList) {
        let newOp = document.createElement("option")
        newOp.innerText = code
        newOp.value = code
        if (select.name === "from" && code === "USD") {
            newOp.selected = "selected"
        } else if (select.name === "to" && code === "INR") {
            newOp.selected = "selected"

        }
        select.append(newOp)
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    })
}


const updateExchangeRate=async()=>{
    let amt=document.querySelector(".amount input")
    let amtVal=amt.value
    if(amtVal==="" ||amtVal<1){
        amtVal=1
        amt.value="1"
    }
    // console.log(fromCurr,toCurr)
    const URL=`${url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response=await fetch(URL)
    let data=await response.json()
    let rate=data[toCurr.value.toLowerCase()]
    // console.log(rate)

    let finalAmt=amtVal*rate
    msg.innerText=`${amtVal} ${fromCurr.value} =${finalAmt} ${toCurr.value}`
}



const updateFlag=(element)=>{
      let currCode=element.value
      let countryCode=countryList[currCode]
      let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
      let img=element.parentElement.querySelector("img")
      img.src=newSrc

}


btn.addEventListener("click",(evt)=>{
    evt.preventDefault()
    updateExchangeRate()
})


window.addEventListener("load",()=>{
    updateExchangeRate()
})




