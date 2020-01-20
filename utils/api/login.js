import { postData } from '../helper'

export const login = async (formData) => {
    const res = await postData(formData, 'loginUser')
    return res
}