export const Signup = async (body) => {
    try{
        await fetch("https://yaft-mono.herokuapp.com/auth/users", {
    method: "POST",
    body: JSON.stringify(body),
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const Signin = async (body) => {
    try{
        await fetch("https://yaft-mono.herokuapp.com/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};
