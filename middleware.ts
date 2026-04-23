const middleware = () => {
  return console.log((() => "Middleware saying hello world")());
};

export default middleware;
