let form = document.querySelector('form')
     
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
      let height = parseInt(document.querySelector("#height").value);
      let weight = parseInt(document.querySelector("#weight").value);
      let result = document.querySelector("#result");

      if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = 'invalid height'
      }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'invalid weight'
      }
      else{
        let bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            result.innerHTML = `<div>${bmi}</div><div>under weight</div>`;
            
        }else if(bmi >= 18.6 && bmi<=24.9){
            result.innerHTML = `<div>${bmi}</div><div>Normal Range</div>`;

        }else{
            result.innerHTML = `<div>${bmi}</div><div>over weight</div>`;

        }
      }


    })