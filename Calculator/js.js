let History_Text = document.getElementById("History");
let Result = document.getElementById("Result");

let Buttons = document.querySelectorAll("button");


for (i of Buttons)
{
    i.addEventListener("click",(e)=>
    {
        let ButtonText = e.target.innerText;


        if (ButtonText == "=")
        {
            History_Text.innerText = Result.innerText;

            let Data = eval(Result.innerText);
            Result.innerText = Data;

        }
        else if (ButtonText  == "C")
        {
            Result.innerText = "";
            History_Text.innerText = "";
        }
        else if (ButtonText  == "Delete")
        {
            Result.innerText = Result.innerText.slice(0, -1);;
          
        }
        
        else if (ButtonText  == "X2")
        {
            Result.innerText = Result.innerText*Result.innerText;
          
        }
        
        
        else if (ButtonText  == "X3")
        {
            Result.innerText = Result.innerText*Result.innerText*Result.innerText;
          
        }
        else
        {
        
            Result.innerText += ButtonText;
        }
        
    })
}

