import superagent from 'superagent';

const getMovies = async() => {
  try {
    const res = await superagent.get('https://g5jezgqoe1.execute-api.us-east-1.amazonaws.com/stg');
    return res.body;
  } catch (e) {
    console.log(e);
  }
};

export default { getMovies };
