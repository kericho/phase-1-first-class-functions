let receivesAFunction = spy => spy();

  
  let returnsANamedFunction = () => {
    return function receivesAFunction(name) {};
  };
  
  function returnsAnAnonymousFunction() {
    return function (name) {
    };
  }