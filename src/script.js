let btn = document.querySelectorAll('.btn');
const result = document.getElementById('result');

btn.forEach((button)=>{
    button.addEventListener('click',function (){
        var btnValue = this.innerHTML.trim();
        if(btnValue == "AC" ){
            result.value = ''
        }
        else if(btnValue == "DEL"){
            let newValue = result.value.slice(0,-1)
            result.value = newValue
        }
        else if(btnValue == "="){
            let solution = eval(result.value)
            result.value = solution
        }
        else{
            result.value += btnValue
        }
        
    })
})