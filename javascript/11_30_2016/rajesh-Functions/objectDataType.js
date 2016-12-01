(function(){
 var fullDetails = {
        firstName: "Rajesh",
        lastName: "reddy",
        rollNumber: "14",
        status: false
    };

    console.log(fullDetails.firstName);
    console.log(fullDetails.status);
    fullDetails.status = true;
    fullDetails.present = true;
    console.log(fullDetails.status);
    console.log(fullDetails.present);

})();