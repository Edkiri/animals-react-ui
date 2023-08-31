const validators = {
  minTextLength: (min) => ({
    pattern: new RegExp(`.{${min},}`),
    errorMessage: `Ingresa un mínino de ${min} letras`,
  }),
};

export default validators;
