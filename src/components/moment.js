import React,{Component} from 'react'
import {Text} from "native-base";
import moment from "moment";



class TimeAgo extends Component{

    constructor(props){
        super(props);
        this.data = props.time
    }


    render(){
        const time =  moment(this.data || moment.now).fromNow();
        return(
            <Text style={{fontSize: 12,marginHorizontal: 10}}>{time}</Text>
        )
    }
}

export default TimeAgo