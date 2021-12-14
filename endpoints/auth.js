export const Signup = async (body) => {
    try{
        const data=await fetch("https://yaft-mono.herokuapp.com/auth/users", {
    method: "POST",
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(body),
  });
  return data.json();
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const Signin = async (body) => {
    try{
        const data=await fetch("https://yaft-mono.herokuapp.com/auth/login", {
    method: "POST",
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(body),
  }

  );
   return data.json();
    }
    catch(err){
        throw new Error(err)
    }
  
};
