class LoginService {
    login = function(email, password, role){
        var usersTemp = JSON.parse(localStorage.getItem("USERS"));
        var users= usersTemp ? usersTemp: [];     
        let exists = false;   
        for(let obj of users)
        {
            if( obj.email == email  && obj.password == password && obj.user == role)
            {
                exists=true;
                var users=[];
                var usersTemp = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
                var users= usersTemp ? usersTemp:[];
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(obj ) );
                localStorage.getItem("LOGGED_IN_USER");
                break;
            }
        }
        return exists;
    }
}