//Write  password validation code here 
function setPasswordConfirmValidity() {
    
}


// Write code to submit customer details 
const url='http://localhost:3000/customers'
function submitCustomerDetail(event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const postPromise = axios.post(url,formProps);
    postPromise.then(response=>{
        event.preventDefault();
        console.log(response);
    });
}



