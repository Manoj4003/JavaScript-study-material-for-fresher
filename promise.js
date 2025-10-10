let newPromise = new Promise((resolve, reject) => {
  let ticketBooked = true;
  if (ticketBooked) {
    resolve("Ticket booked");
  } else {
    reject(" Ticket Notbooked ");
  }
});
newPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
// another one is also availablle is called finally 
.finally(()=>{
    console.log("End")
});