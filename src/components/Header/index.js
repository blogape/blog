import React,{Component} from 'react';
import './index.less';
import Button from 'antd/lib/button';

class Header extends Component{
    render(){
        return(
            <div class='header'>
            <Button type="primary">Button</Button>

            </div>
        )
    }
}

export default Header;