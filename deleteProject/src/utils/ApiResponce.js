class ApiResponce{
    constructor(statusCode,data,message='success'){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.responce = statusCode < 400
    }
}
export {ApiResponce}