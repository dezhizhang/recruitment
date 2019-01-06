import React from 'react';
import styles from './BossInfo.css';
import { NavBar, InputItem,TextareaItem,Button  } from 'antd-mobile';
import AvatarSelector from '../avatar/AvatarSelector';
import { connect } from 'react-redux';
import { update } from '../../redux/user';



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
                <TextareaItem
                rows={3}
                autoHeight={true}
                title='职位要求'
                onChange={(v) => this.handleChange('desc',v)}
                >
                    
                </TextareaItem >
                <Button type='primary'
                 onClick={() => this.props.update(this.state)}
                >保存
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps,{ update })(BossInfo);
