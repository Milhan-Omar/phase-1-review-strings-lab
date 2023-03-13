// Write your code in this file!
const currentUser = "Milhan Osman";
// console.log(currentUser)
// welcomeMessage = "Welcome to Flatbook";
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
// const welcomeMessage = "Welcome to Flatbook, ";
// welcomeMessage.slice(-1);
// welcomeMessage[-1].push('!');
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// const shortGreeting = `Welcome, ${currentUser.slice(0,1)}`;
 // if (shortGreeting==="Welcome,${currentUser.slice(0,1)}"){
 // let shortGreeting = "Welcome,${currentUser.slice(0,1)}!"}
 // console.log("shortGreeting" + shortGreeting );

 const firstInitial = currentUser[0];
 const restOfName = currentUser.slice(1);
 let shortGreeting = `Welcome, ${firstInitial}!`;
 console.log('====================================');
 console.log(firstInitial);
 console.log('====================================');
 console.log('====================================');
 console.log(restOfName);
 console.log('====================================');