export const CreateCliaim = async (id,body) => {
    try{
        await fetch(`https://yaft-mono.herokuapp.com/claim/${id}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const VerifyClaim = async (id,body) => {
    try{
        await fetch(`https://yaft-mono.herokuapp.com/claim/${id}/verify`, {
    method: "POST",
    body: JSON.stringify(body),
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const GetClaim = async (id) => {
    try{
        await fetch(`https://yaft-mono.herokuapp.com/claim/${id}`, {
    method: "GET",
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};