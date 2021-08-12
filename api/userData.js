

let users = [
    {id: 1, username: "WesleyCrusher", password: "shutupPicard"},
    {id: 2, username: "Worf359", password: "IamNotaMerryMan"},
    {id: 3, username: "Picard1701", password: "FourLights"}
]



module.exports = {
async get() {
    return users;
  },

async add({username, password}) {
    const newUser = {id: Date.now(), username, password}
    users.push(newUser);
    return newUser;
},

async validateUser({username, password}) {
    const user = users.find(user => user.username === username);
    if(user && user.password === password){
    return "Welcome!";
    } else {
        return "Invalid Username or Password"
    }
}
}


