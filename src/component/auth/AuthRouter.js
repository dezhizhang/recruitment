import React from 'react';
import axios from 'axios';


class AuthRouth extends React.Component{
    componentDidMount(){
        axios.get('/user/info')
             .then((res) => {
                 if(res.status == 200){
                     console.log(res.data);

                 }
             })

    }
    render(){
        return (<div>hello</div>)
    }
}

export default AuthRouth;
