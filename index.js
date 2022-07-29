let person=1;
function increasePeople(){
    console.log(person)
    person+=1;
    document.getElementById('numberOfPeople').innerText=person;
    calculateBill();
}
function decreasePeople(){
    if(person==1){
        document.getElementById('numberOfPeople').innerText=person;
    }else{
        person-=1;
        document.getElementById('numberOfPeople').innerText=person;
    }
    calculateBill();
    
}

function calculateBill(){
    let Bill=document.getElementById('billTotalInput');
    const TipPer=document.getElementById('tipInput');
    let per=Number(TipPer.value);
    let bill=Number(Bill.value);
    document.getElementById('perPersonTotal').innerText="$"+bill;
    console.log(bill);
    newbill=(bill+((per*bill)/100))/person;
    document.getElementById('perPersonTotal').innerText="$"+newbill;
}
