const User=(props)=>{
    const {data}=props;
    return(
        <div>
            <h1>User Component</h1>
            <h3>User Name: {data.name}</h3>
            <h3>Age: {data.age}</h3>
            <h3>Age: {data.email}</h3>
        </div>
    );
}

export default User;