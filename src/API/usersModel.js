import axios from 'axios'

export const getUsers = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
        return response
    } catch(err) {
        throw new Error(err)
    }
}

export const getUser = async(id) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        return response
    } catch(err) {
        throw new Error(err)
    }
}

export const createUser = async(values) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users/',values)
        return response
    } catch(err) {
        throw new Error(err)
    }
}

export const updateUser = async(id, values) => {
    try {
        const response = await axios.put('https://jsonplaceholder.typicode.com/users/'+id, values)
        return response
    } catch(err) {
        throw new Error(err)
    }
}

export const deleteUser = async(id) => {
    try {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
        return response
    } catch(err) {
        throw new Error(err)
    }
}