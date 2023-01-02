import { bool } from "yup"

export const email_validation= (email )=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
    else{
        return (false)
    }  
}

export const empty_validation= (inputs )=>{
  let flag=true
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index]==="" || inputs[index]==='') {
      flag=false
    }
  }
  return flag
  
}