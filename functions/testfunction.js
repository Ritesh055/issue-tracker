exports.handler = async(event, context) =>{
    console.log("HI");
    return{  statusCode: 200, body : "Hello World" };
} 
