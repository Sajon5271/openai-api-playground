const axios = require('axios').default;

let config = {
  headers: {
    Authorization: 'Bearer <secret_api_key>',
    'Content-Type': 'application/json',
  },
};

axios
  .post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-003',
      prompt: 'I am 110kg and 165cm in height. Give me a diet.',
      max_tokens: 100,
      temperature: 0.9,
    },
    config
  )
  .then((res) => {
    console.log(res.data);
  });
