export const GetOverallSummary = async (id) => {
  try {
    const data = await fetch(
      `https://yaft-mono.herokuapp.com/dashboard/${id}/overall-summary`,
      {
        method: "GET",
      }
    );
    return data.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const GetSpendSummary = async (id) => {
  try {
    const data = await fetch(
      `https://yaft-mono.herokuapp.com/dashboard/${id}/spend-summary`,
      {
        method: "GET",
      }
    );
    return data.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const GetPendingQuery = async (id) => {
    try {
      const data = await fetch(
        `https://yaft-mono.herokuapp.com/dashboard/${id}/pending-queries`,
        {
          method: "GET",
        }
      );
      return data.json();
    } catch (err) {
      throw new Error(err);
    }
  };

  export const GetPendingDisputes = async (id) => {
    try {
      const data = await fetch(
        `https://yaft-mono.herokuapp.com/dashboard/${id}/pending-disputes`,
        {
          method: "GET",
        }
      );
      return data.json();
    } catch (err) {
      throw new Error(err);
    }
  };
