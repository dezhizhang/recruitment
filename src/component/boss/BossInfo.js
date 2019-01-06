import React from 'react';
import styles from './BossInfo.css';
import { NavBar, InputItem } from 'antd-mobile'
import AvatarSelector from '../avatar/AvatarSelector'


class BossInfo extends React.Component{
    state = {
        title:'',
        company:'',
        money:'',
        desc:'',
    }
    handleChange = (key,value) => {
        this.setState({
            [key]:value
        })
    }
    render(){
        return(
            <div className={styles.wrapper}>
                <NavBar
                mode="dark">
                    BOSS信息完善页
                </NavBar>
                <AvatarSelector/>
                <InputItem
                 onChange={(v) => this.handleChange('title',v)}
                >
                    招聘职位
                </InputItem>
                <InputItem
                 onChange={(v) => this.handleChange('company',v)}
                >
                    公司名称
                </InputItem>
                <InputItem
                 onChange={(v) => this.handleChange('money',v)}
                >
                    职位新资
                </InputItem>
                <InputItem
                 onChange={(v) => this.handleChange('desc',v)}
                >
                    职位要求
                </InputItem>
            </div>
        )
    }
}

export default BossInfo;
