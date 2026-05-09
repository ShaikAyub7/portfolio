const middleware = () => {
  return console.log(
    (() => "↩————————↩  Middleware saying hello ↪—————————↪ ")(),
  );
};

export default middleware;
