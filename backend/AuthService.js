const users = [{
    username: "1",
    password: "1",
    email:"1@1.pl"
  }]
  
  export const login=(username, password) => {
    console.log(users);
      return users.find(u=>u.username===username&&u.password===password);
    }
  
  
  
  
  
  export const register = (username, password, email)=>{
      users.push({username: username, password:password, email: email})
      console.log("registered!")
  }
  