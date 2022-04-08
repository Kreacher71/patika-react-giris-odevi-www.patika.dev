const axios = require('axios').default;

const getUser = async ( number ) => {
    return new Promise( async ( resolve, reject ) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
        
        resolve( data );
        reject('there is an error in getUser');
    }
    );
    
}
const getPost = async ( number ) => {
    return new Promise( async ( resolve, reject ) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);
        
        resolve( data );
        reject('there is an error in getPost');
    }
    );
    
}

Promise.all([getUser(1), getPost(1)])
    .then(console.log)
    .catch(console.log);


    