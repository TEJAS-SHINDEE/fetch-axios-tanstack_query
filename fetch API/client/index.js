console.log("you are in client page");

const api = () => {
    const url = "http://localhost:5000/tony-info";
    fetch(url)
        .then( (response) => {
            console.log("row res from api : ",response);
            return response;
        })
        .then( async (data) => {
            const newData = await data.json();
            console.log("readable data : ",newData);
        })
        .catch( (error) => {
            console.log("error occured : ", error);
        })
}

api();