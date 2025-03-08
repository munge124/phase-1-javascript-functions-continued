// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  // Test the functions
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("paint")); // "This Saturday, I want to paint!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("%");
console.log(encouragingPromptFunction("a dedicated programmer")); // "You are %a dedicated programmer%!"

