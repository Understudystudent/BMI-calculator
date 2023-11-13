let calculateButton = document.getElementById("calculate");
let statement = document.getElementById("result-answer");


calculateButton.addEventListener("click", ()=>{
    let heightInput = +document.getElementById("h-input-field").value;
    let weightInput = +document.getElementById("w-input-field").value;
    let result = document.getElementById("result");
    
    height = heightInput;
    weight = weightInput;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        result.innerText = "Your BMI falls below 18.5 its underweight";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        result.innerText = "Your BMI falls within 18.5 and 24.9 range, you are healthy";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        result.innerText = "Your BMI falls within between 25 and 29.9, you are overweight";
    }else{
        result.innerText = "Your BMI falls within the obese range,";
    }
});
