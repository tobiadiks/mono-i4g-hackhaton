export const CreateClaim = async (id,body) => {
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
        const data = await fetch(`https://yaft-mono.herokuapp.com/claim/${id}/verify`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return data.json();
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const GetClaim = async (id) => {
    try{
        const data = await fetch(`https://yaft-mono.herokuapp.com/claim/${id}`, {
    method: "GET",
  });
  return data.json();
    }
    catch(err){
        throw new Error(err)
    }
  
};