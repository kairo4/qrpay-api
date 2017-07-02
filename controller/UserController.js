var connection = require('../app').connection;


function insertUser(user, callback) {

    console.log('user', user);

    connection.query('insert into user_info set ?', user, function(error, result) {
        if (error) {
            callback(error, result);
        } else {
            callback(null, user);
        }
    });
}

function readUser(user, callback) {

    var userInfo = [user.email, user.password];

    connection.query('select * from user_info where email = ? and password = ? ',userInfo, function (error, result) {
       if (error) {
           console.log(error);
           callback(error);
       } else {
           callback(null, result);
       }
    });
}

module.exports = {
    readUser: readUser,
    insertUser: insertUser
};
