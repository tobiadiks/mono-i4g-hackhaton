export const CreateQuery = async (id,body) => {
    try{
        const data = await fetch(`https://yaft-mono.herokuapp.com/query/${id}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return data.json();
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const VerifyQuery = async (id,body) => {
    try{
        const data = await fetch(`https://yaft-mono.herokuapp.com/query/${id}/verify`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return data.json();
    }
    catch(err){
        throw new Error(err)
    }
  
};

export const GetQuery = async (id) => {
    try{
        const data = await fetch(`https://yaft-mono.herokuapp.com/query/${id}`, {
    method: "GET",
  });
  return data.json();
    }
    catch(err){
        throw new Error(err)
    }
  
};