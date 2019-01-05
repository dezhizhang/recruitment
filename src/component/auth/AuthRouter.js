import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadData } from '../../redux/user';





class Auth extends React.Component{
    componentDidMount(){
        const publicList = ['/login','/register'];
        const pathname = this.props.location.pathname;
        if(publicList.indexOf(pathname) > -1){
            return null;
        }

        
        axios.get('/user/info')
             .then((res) => {
                 if(res.status == 200){
                    if(res.data.code == 0){
                        //有户登录
                    } else {
                      this.props.loadData(res.data.data)
                      this.props.history.push('/login')


                    }

                 }
             })

    }
    render(){
        return null;
    }
}

const AuthRouth = withRouter(Auth)



const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}
export default connect(mapStateToProps,{ loadData })(AuthRouth);
