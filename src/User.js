const User=(props)=>{
    const {data}=props;
    return(
        <div>
        <h3>User Data Display using props</h3>
            {
                data.map((items,key)=>{
                    // console.log(items.name);
                    return <div key={key} style={{backgroundColor:"red",width:250,padding:12,margin:'20px auto'}}>
                        <h1>User Name: {items.name}</h1>
                        <h3>Age: {items.age}</h3>
                        <h3>Email: {items.email}</h3>
                    </div>
                })
            }
        </div>
    );
}

export default User;