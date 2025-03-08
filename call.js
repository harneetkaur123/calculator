
    let input =document.getElementById('screen').value;
    console.log(input);
    
    let button =document.querySelectorAll('button');

     button.forEach(but =>{
            but.addEventListener('click', function show() { 
               let ipt = document.querySelector('input');
              
                  let result,operator;

                  if(but.textContent == "=")
                {
                  let forarray=ipt.value;
                  let value=ipt.value.match(/[+-/*%]|\d*\.?\d+/g);
                  console.log(" value = ",value);
                  for(let i=0;i<value.length;i++)
                  {
                    if(i==0)
                    {
                      result=parseFloat(value[i]);
                
                    }
                    else if(!isNaN(value[i]))
                    {
                       operator=value[i-1];
                       switch(operator)
                       {
                        case '+':
                            result =result + parseFloat(value[i]);
                            break;
                         case '-':
                            result =result -  parseFloat(value[i]);
                            break; 
                         case '*':
                            result=result * parseFloat(value[i]);
                            break;
                         case '/':
                            result =result /  parseFloat(value[i]);
                            break; 
                          case '%':
                               result=parseFloat(value[i])*(result/100);
                               break;
                                         
                       }
                    }
                    
                  }
                  console.log("  result = ",result);
                  ipt.value=result;
                   forarray=forarray+" = "+result;
                  console.log(forarray);
                  let newpara=document.createElement('p');
                  let histdiv=document.querySelector('.history');
                  newpara.textContent=forarray;
                   histdiv.insertAdjacentElement("afterbegin",newpara);
                }
                else if(but.textContent == "Ac")
                {
                  ipt.value="";
                }
                else if(but.textContent == "DE")
                  {
                    ipt.value=ipt.value.substring(0,ipt.value.length-1);
                  }
                 else if(but.textContent == "HIST")
                 {
                  historyFunction();
                 }
                else{
                  ipt.value+=but.textContent;
                }
            })
     })
  
     function historyFunction()
     {
      let btn=document.querySelector('#HIST');
      btn.addEventListener('click',tog);
      function tog(){
       let history=document.querySelector('.history');
        history.classList.toggle('hist');
        console.log(history);
       
      }
     
     }