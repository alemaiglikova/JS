function check(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  
  const result = check(5);
  console.log(result); 


  
  
  
  function find(number) {
    const f = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        f.push(i);
      }
    }
  
    return f;
  }
  
  const f = find(14);
  console.log(f); 