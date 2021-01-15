import fetch from './fetch'
export default {
    // Get All Data Types
    getAllDataTypes (params) {
        return fetch.get('/dataType/getAllDataTypes', params)
    }
}
