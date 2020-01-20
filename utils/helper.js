import axios from 'axios';
import validator from 'validator';
import { toast } from 'react-toastify'

const { API } = process.env.customKey

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

export const postData = (params, url) => {
   return axios
    .post(`${API}/${url}`, params)
    .then((res) => {
        if(res.data.error){
            toast.error(res.data.error.message)
            return { status : false, data: {} }
        }else{
            return { status: true, data: res.data }
        }
    })
    .catch((err) => {
        console.log(err);
    })
}