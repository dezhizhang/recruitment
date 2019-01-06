import React from 'react';
import { Grid,List } from 'antd-mobile';





class AvatarSelector extends React.Component{
    state={

    }
    
    render(){
        let avatarList = 'girl,hello,man,text,wonan,yellow'.split(',').map(v=>({
            icon:require(`../../image/${v}.png`),
            text:v
        }));

        let gridHeader = this.state.text ? 
                                (<div>
                                    <span>己选择头像</span>
                                    <img style={{width:20}} src={this.state.icon} alt=''/>
                                </div>)
                                :<div>请选择头像</div>
        return(<div>
            <List renderHeader={() => gridHeader}>
                <Grid 
                    data={avatarList}
                    onClick={elm => {
                        this.setState(elm)
                        this.props.selectAvatar(elm.text)
                    }}
                    >
                </Grid>
            </List>
           
        </div>)
    }
}

export default AvatarSelector;
