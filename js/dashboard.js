document.getElementById('btn-deposite').addEventListener('click', function () {




    const inputs = inputFieldById('input-deposite')



    if (isNaN(inputs)) {
        alert('Please provide a valid number');
        return;
    }
    const texts = textFieldById('dep-money')
    const totalText = textFieldById('tv-total-money')


    const deposite = inputs + texts;
    const total = inputs + totalText;

    setValue('dep-money', deposite)
    setValue('tv-total-money', total)




    const statement = document.getElementById('statement');

    const list = document.createElement('div');

    list.innerHTML = `

    <div class="flex justify-between py-10 border-b-2 border-gray-300">


    <h1 class="text-3xl text-green-500 font-bold">Deposite</h1>

    <p class="text-3xl text-indigo-400"><span>$</span>${deposite}</p>
</div>






    
    
    
    
    
    `

    statement.appendChild(list);




})

document.getElementById('btn-withdraw').addEventListener('click', function () {






    const withdrawInput = inputFieldById('input-withdraw')

    if (isNaN(withdrawInput)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawText = textFieldById('tv-withdraw')
    const totalText = textFieldById('tv-total-money')

    const withdraw = withdrawInput + withdrawText;
    const total = totalText - withdraw;

    setValue('tv-withdraw', withdraw)
    setValue('tv-total-money', total)




    const statement = document.getElementById('statement');
    const list = document.createElement('div');
    list.innerHTML = `


    <div class="flex justify-between py-10 border-b-2 border-gray-300">


    <h1 class="text-3xl text-red-500 font-bold">Withdraw</h1>

    <p class="text-3xl text-red-400"><span>$</span>${withdraw}</p>
</div>
    
    
    `



    statement.appendChild (list)
})