import React from 'react';
import styles from './Register.css';

import { List, InputItem,WingBlank, WhiteSpace,Button,ImagePicker, Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

class Register extends React.Component{
    state={
        user:'',
        pwd:'',
        repeatpwd:'',
        type:'genius'
    }

    handleChange = (key,value) => {
        console.log(ev.targer)
    }
    render(){
        return (<div>
               <div>
               <div className={styles.userImg}>
                  <img className={styles.Img} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546539674969&di=9e82975890c9bf04ae51a9e95861b7fe&imgtype=0&src=http%3A%2F%2Fimg.jsqq.net%2Fuploads%2Fallimg%2F150416%2F1_150416081959_5.png'/>
               </div>
               </div>
             <List>   
                 <InputItem
                  
                 >用　　户：</InputItem>
                 <InputItem>密   　      码：</InputItem>
                 <InputItem>确认密码：</InputItem>

             </List> 
             <WhiteSpace/>
             <RadioItem checked={this.state.type =='genius'}>
                牛人
             </RadioItem>
             <RadioItem checked={this.state.type == 'boss'}>
                BOSS
             </RadioItem>
             <WingBlank>
                <Button type="primary">
                    注册
                </Button>
             </WingBlank>
        </div>)
    }
}


export default Register;
