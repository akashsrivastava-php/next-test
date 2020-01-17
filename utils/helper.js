import axios from 'axios';
import validator from 'validator';

const { API_URL } = process.env.customKey

export const validateForm = (formData, rules) => {
    let isValid
    for (let [key, value] of formData.entries()) { 
        const validRule = rules[key]
        Object.entries(validRule).map(([k,v])=>{
            if(v.options){
                isValid = validator[k](value,v.options) ? true : false
            }else{
                isValid = validator[k](value) ? true : false
            }
            document.getElementById(key).innerHTML = isValid ? '' : v.message
        })
        if(!isValid){
            return isValid;
        }
    }
    return isValid
}

export const postData = (params) => {
    axios
    .get('/user', params)
    .then((res) => {
        console.log(res);
    })
    .catch(function (error) {
        console.log(error);
    })
}