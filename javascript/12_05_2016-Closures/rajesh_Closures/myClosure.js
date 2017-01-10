(function(){
    function outer(){
        var _outer = this;
    /*    _outer.sum = 0;
        _outer.sub = 0;
        _outer.mul = 0;
        _outer.div = 0; */
    function operation(x , y){
        var _op = this;
        _op.addition = function addition(x , y){
        return (x + y);
        };
        _op.substract = function substract(x , y){
        return (x - y);
        };
        _op.multiplication = function multiplication(x , y){
        return (x * y);
        };
        _op.divident = function divident(x , y){
        return (x/y);
        };
    };
        var x = new operation(20 , 10);
        _outer.sum = x.addition();
        _outer.sub = x.substract();
        _outer.mul = x.multiplication();
        _outer.div = x.divident();




        /*console.log(_outer.sum);
        console.log(_outer.sub);
        console.log(_outer.mul);
        console.log(_outer.div);

    console.log(5);


*/

}

    var result = new outer();

    console.log(result);

})();