import React from 'react';
import styles from  './Login.css';
import { List, InputItem,WingBlank, WhiteSpace,Button,ImagePicker } from 'antd-mobile';
import { list } from 'postcss';


class Login extends React.Component{

    constructor(props){
       super(props);
       this.state = {
           'url': "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg"
       }
    }
   
    login = () => {
       

    }

    register = () => {
      this.props.history.push('/register');


    }
    render(){
        const { files } = this.state;
        return (
            <div className={styles.wrapper}>
               <div className={styles.userImg}>
                  <img className={styles.Img} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546539674969&di=9e82975890c9bf04ae51a9e95861b7fe&imgtype=0&src=http%3A%2F%2Fimg.jsqq.net%2Fuploads%2Fallimg%2F150416%2F1_150416081959_5.png'/>
               </div>
               <WhiteSpace/>
               <WhiteSpace/>
               <WhiteSpace/>
               
               <WingBlank>
                   <List>
                       <InputItem>用户</InputItem>
                       <WhiteSpace/>
                       <InputItem>密码</InputItem>
                   </List>
                   <Button onClick={this.login} type='primary'>登录</Button>
                   <WhiteSpace/>
                   <Button onClick={this.register} type='primary'>注册</Button>
               </WingBlank>
            </div>
        )
    }
}

export default Login;

