// When we prpvide function as an (argument) to ohter
// function that function is known as callback function
function showCallFunc(fn){
    const value = 10;
    fn(value);
}

showCallFunc(function (value){
    console.log(value);
});