import React,{Component} from 'react'
import {View} from 'react-native'
import {Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button} from 'native-base';
import TimeAgo from "./moment";


class DataItem extends Component {

    constructor(props){
        super(props);
        this.data = props.data
    }

    handlePress = ()  => {
        const {url, title} = this.data;
        this.props.onPress({url, title});
    };

    render(){
        const { data, } = this.props;
        return(
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{uri: data.urlToImage !== null ? data.urlToImage : "https://dummyimage.com/600x400/000/fff&text=Sanem"}}/>
                </Left>
                <Body>
                    <Text numberOfLines={2}>{data.title}</Text>
                    <Text note numberOfLines={3}>{data.description}</Text>
                    <View style={{flex: 1,flexDirection: 'row',marginTop: 10,marginLeft: 0,marginRight: 6}}>
                        <Text style={{fontSize: 12}}>{data.source.name}</Text>
                        <TimeAgo time={data.publishedAt}/>
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
}


export default DataItem;