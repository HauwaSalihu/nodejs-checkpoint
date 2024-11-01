import generator from "generate-password";

let password = () => {
return generator.generate({
	length: 10,
	numbers: true

});
}



// 'uEyMTw32v9'
console.log(password());