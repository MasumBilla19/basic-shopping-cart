// buy with iphone 12 max pro
    // increment button
    var incrementBtn = document.getElementById('incrementBtn');
    incrementBtn.addEventListener('click', function(){
        var textBox = document.getElementById('textBox');
        var itemValueOne = document.getElementById('itemValueOne');
        var subTotalAmount = document.getElementById('subTotalAmount');
        var totalAmount = document.getElementById('totalAmount'); 
        

        textBox.value = parseFloat(textBox.value) + 1;
        itemValueOne.innerText = parseFloat(itemValueOne.innerText) + 1219;

        if (textBox.value > 1) {
            subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) + (parseFloat(itemValueOne.innerText) - (parseFloat(textBox.value - 1) * 1219));
            totalAmount.innerText = parseFloat(totalAmount.innerText) + (parseFloat(itemValueOne.innerText) - (parseFloat(textBox.value - 1) * 1219));
        } else {
            subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) + parseFloat(itemValueOne.innerText);
            totalAmount.innerText = parseFloat(totalAmount.innerText) + parseFloat(itemValueOne.innerText);
        }
    })

    // decrement button
    var decrementBtn = document.getElementById('decrementBtn');
    decrementBtn.addEventListener('click', function(){
        var textBox = document.getElementById('textBox');
        var itemValueOne = document.getElementById('itemValueOne');
        var subTotalAmount = document.getElementById('subTotalAmount');
        var totalAmount = document.getElementById('totalAmount'); 


        if (textBox.value > 0) {
            textBox.value = parseFloat(textBox.value) - 1;
            itemValueOne.innerText = parseFloat(itemValueOne.innerText) - 1219;

            if (itemValueOne.innerText == 0 && (subTotalAmount.innerText != 0 || totalAmount.innerText != 0)) {
                subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) - 1219;
                totalAmount.innerText = parseFloat(totalAmount.innerText) - 1219;
            } else {
                subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) - parseFloat(itemValueOne.innerText);
                totalAmount.innerText = parseFloat(totalAmount.innerText) - parseFloat(itemValueOne.innerText);
            }
        }
    })


// buy with iphone 12 max pro Case 

    // increment button
    var incrementBtnOne = document.getElementById('incrementBtnOne');
    incrementBtnOne.addEventListener('click', function(){
        var textBoxOne = document.getElementById('textBoxOne');
        var itemValueOnee = document.getElementById('itemValueOnee');
        var subTotalAmount = document.getElementById('subTotalAmount');
        var totalAmount = document.getElementById('totalAmount'); 
        

        textBoxOne.value = parseFloat(textBoxOne.value) + 1;
        itemValueOnee.innerText = parseFloat(itemValueOnee.innerText) + 59;

        if (textBoxOne.value > 1) {
            subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) + (parseFloat(itemValueOnee.innerText) - (parseFloat(textBoxOne.value - 1) * 59));
            totalAmount.innerText = parseFloat(totalAmount.innerText) + (parseFloat(itemValueOnee.innerText) - (parseFloat(textBoxOne.value - 1) * 59));
        } else {
            subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) + parseFloat(itemValueOnee.innerText);
            totalAmount.innerText = parseFloat(totalAmount.innerText) + parseFloat(itemValueOnee.innerText);
        }

    
    })

    // decrement button
    var decrementBtnOne = document.getElementById('decrementBtnOne');
    decrementBtnOne.addEventListener('click', function(){
        var textBoxOne = document.getElementById('textBoxOne');
        var itemValueOnee = document.getElementById('itemValueOnee');
        var subTotalAmount = document.getElementById('subTotalAmount');
        var totalAmount = document.getElementById('totalAmount'); 


        if (textBoxOne.value > 0) {
            textBoxOne.value = parseFloat(textBoxOne.value) - 1;
            itemValueOnee.innerText = parseFloat(itemValueOnee.innerText) - 59;

            if (itemValueOnee.innerText == 0 && (subTotalAmount.innerText != 0 || totalAmount.innerText != 0)) {
                subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) - 59;
                totalAmount.innerText = parseFloat(totalAmount.innerText) - 59;
            } else {
                subTotalAmount.innerText = parseFloat(subTotalAmount.innerText) - parseFloat(itemValueOnee.innerText);
                totalAmount.innerText = parseFloat(totalAmount.innerText) - parseFloat(itemValueOnee.innerText);
            }
        }
    })







    