console.log('RUNNER');
console.log('IMPORT.META:', import.meta.env);

document.getElementById('app').innerHTML = `
  <h1>Окружение: ${import.meta.env.ENV_TITLE}</h1>
  <p>API_URL: ${import.meta.env.ENV_API_URL}</p>
`;