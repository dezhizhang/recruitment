import React from 'react';
import styles from  './Login.css';
import { List, InputItem,WingBlank, WhiteSpace,Button,ImagePicker } from 'antd-mobile';
import { login } from '../../redux/user';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Login extends React.Component{

    constructor(props){
       super(props);
       this.state = {
            user:'',
            pwd:'',

       }
    }
   
    register = () => {
      this.props.history.push('/register');


    }

    handleChange = (key,value) => {
        this.setState({
            [key]:value
        })
    }

    handleLogin = () => {
        this.props.login(this.state);

    }
    render(){
        const { files } = this.state;
        console.log(this.props);
        
        return (
            <div className={styles.wrapper}>
               <div className={styles.userImg}>
                  <img className={styles.Img} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546539674969&di=9e82975890c9bf04ae51a9e95861b7fe&imgtype=0&src=http%3A%2F%2Fimg.jsqq.net%2Fuploads%2Fallimg%2F150416%2F1_150416081959_5.png'/>
               </div>
               { this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo}/> : null }
               <WhiteSpace/>
               <WhiteSpace/>
               <WhiteSpace/>
               
               <WingBlank>
                   <List>
                       <InputItem
                        onChange={v => this.handleChange('user',v)}
                       >
                       用户
                       </InputItem>
                       <WhiteSpace/>
                       <InputItem
                        type='password'
                        onChange={v => this.handleChange('pwd',v)}
                       >密码</InputItem>
                   </List>
                   <Button onClick={this.handleLogin} type='primary'>登录</Button>
                   <WhiteSpace/>
                   <Button onClick={this.register} type='primary'>注册</Button>
               </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user:state.user
    }
}

export default connect(mapStateToProps,{ login })(Login);

