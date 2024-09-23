
// Card1
document.getElementById('donate1')
.addEventListener('click',function(){

    const enteramount1=parseFloat(document.getElementById('inputamount1').value)
    const adAmaount1=parseFloat(document.getElementById('addamount1').innerText)
    const balance=parseFloat(document.getElementById('totalamount').innerText)

    if(enteramount1>0){
        const sum=enteramount1+adAmaount1
    document.getElementById('addamount1').innerText = sum
    const newbalance=balance-enteramount1 
    document.getElementById('totalamount').innerText = newbalance
    document.getElementById('inputamount1').value = ""
    my_modal_1.showModal()
    }
    else{alert('invalid')}


})

// Card2
document.getElementById('donate2')
.addEventListener('click',function(){

    const enteramount1=parseFloat(document.getElementById('inputamount2').value)
    const adAmaount1=parseFloat(document.getElementById('addamount2').innerText)
    const balance=parseFloat(document.getElementById('totalamount').innerText)

    if(enteramount1>0){
        const sum=enteramount1+adAmaount1
    document.getElementById('addamount2').innerText = sum
    const newbalance=balance-enteramount1 
    document.getElementById('totalamount').innerText = newbalance
    document.getElementById('inputamount2').value = ""
    my_modal_1.showModal()
    }
    else{alert('invalid')}


})

// Card3
document.getElementById('donate3')
.addEventListener('click',function(){

    const enteramount1=parseFloat(document.getElementById('inputamount3').value)
    const adAmaount1=parseFloat(document.getElementById('addamount3').innerText)
    const balance=parseFloat(document.getElementById('totalamount').innerText)

    if(enteramount1>0){
        const sum=enteramount1+adAmaount1
    document.getElementById('addamount3').innerText = sum
    const newbalance=balance-enteramount1 
    document.getElementById('totalamount').innerText = newbalance
    document.getElementById('inputamount3').value = ""
    my_modal_1.showModal()
    }
    else{alert('invalid')}


})

// add history
document. getElementById('History')
.addEventListener('click' ,function(){
    document.getElementById('History').classList.add('bg-green-400')
    document.getElementById('donation').classList.remove('bg-green-400')
})
// add don
document. getElementById('donation')
.addEventListener('click' ,function(){
    document.getElementById('donation').classList.add('bg-green-400')
    document.getElementById('History').classList.remove('bg-green-400')
})