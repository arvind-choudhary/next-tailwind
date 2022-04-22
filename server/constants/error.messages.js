export const ErrorMsg = {
    "USER": {
        "400": {
            statusCode: 400,
            message: "Invalid credentials"
        }
    },
    "SERVER_ERROR": {
        "500": {
            statusCode: 500,
            message: "Internal server error"
        }
    }
}

export const getErrorByType = (type = "SERVER_ERROR") => (statusCode = 500) => {
    return ErrorMsg[type][statusCode];
}
