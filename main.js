const phoneNum = document.querySelector("#phoneNum");
const result = document.querySelector("#result");

// Testing //
// let text = "9532218299";
// let r = text.match(/^(\+91)?[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}|^(\(\+91\))\d{3}[- ]?\d{3}[- ]?\d{4}/g);
// console.log(r[0]);
// Testing //

phoneNum.addEventListener("input", (e) =>{
    const regex = /^(\+91)?[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}|^(\(\+91\))\d{3}[- ]?\d{3}[- ]?\d{4}/g;
    const inputNum = phoneNum.value;
    const found = regex.test(inputNum);

    if (inputNum.length>0){
        if (found){
            const textMatch = inputNum.match(regex); // if user inputs even after validation
            if (inputNum === textMatch[0]){
                result.innerText = "Valid!";
                result.style.color = "green";
                phoneNum.style.color = "green";
            }
            else{
                result.innerText = "Invalid!";
                result.style.color = "red";
                phoneNum.style.color = "red";
            }
        }
        else{
            result.innerText = "Invalid!";
            result.style.color = "red";
            phoneNum.style.color = "red";
        }
    }
    else{
        result.innerText = "";
    }
});


// const regex = /^(\+91)?[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}|^(\(\+91\))\d{3}[- ]?\d{3}[- ]?\d{4}/gm;