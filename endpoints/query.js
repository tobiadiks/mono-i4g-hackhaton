export const CreateQuery = async (id,body) => {
    try{
        await fetch(`https://yaft-mono.herokuapp.com/query/${id}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const VerifyQuery = async (id,body) => {
    try{
        await fetch(`https://yaft-mono.herokuapp.com/query/${id}/verify`, {
    method: "POST",
    body: JSON.stringify(body),
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const GetQuery = async (id) => {
    try{
        await fetch(`https://yaft-mono.herokuapp.com/query/${id}`, {
    method: "GET",
  });
    }
    catch(err){
        throw new Error(err)
    }
  
};