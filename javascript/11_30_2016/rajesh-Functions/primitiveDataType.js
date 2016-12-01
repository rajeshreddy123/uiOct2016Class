// IIFE CONSTRUCT
(function(){
    var x = 5;
    var y = 5.5;
    var fullName = 'Rajesh';
    var status = true;
    var output = null;
    var z = undefined;

    console.log(x);
    console.log(y);
    console.log(fullName);
    console.log(status);
    console.log(output);
    console.log(z);
    function add(){
        var z = x + y;
        console.log(z);
    }
    add();
    var a = add();

})();