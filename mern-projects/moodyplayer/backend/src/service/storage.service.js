var ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

function up(file,fileName){
    return new Promise(
        (resolve,reject)=>{
           imagekit.upload(
            {
                file:file,
                fileName:fileName
            },(error,result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            }
           ) 
        }
    )
}

module.exports =up;