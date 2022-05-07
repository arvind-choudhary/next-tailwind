import bcrypt from "bcrypt"

const salt = 10;

export const generateHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    })
}


export const comparePassword = (password, hashPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashPassword, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}