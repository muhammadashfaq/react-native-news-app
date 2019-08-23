import React, {Component} from 'react';
import {Alert,ActivityIndicator,View} from 'react-native'
import DataItem from "../../components/dataitem";
import {Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button} from 'native-base';


import {getArticles} from "../../service/news";
import ModalComponent from "../../components/modal";


export default class Technology extends Component {


    state = {
        loading: true,
        data: null,
        modalVisible: false,
        modalData: {}
    };


    componentDidMount = () => {

        getArticles('technology').then(data => {
            this.setState({
                loading: false,
                data: data
            })
        }).catch(error => {
            alert(error)
        });
    };

    handleViewOnPress = (data) => {
        this.setState({
            modalVisible: true,
            modalData: data
        });
    };

    handleCloseModal = () => {
        this.setState({
            modalVisible: false,
            modalData: {}
        })
    };

    render() {

        let loadingView = this.state.loading ?
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator animating={this.state.loading} size={'large'}/>
                <Text style={{marginTop: 10}}>Loading</Text>
            </View> :
            <List dataArray={this.state.data}
                  renderRow={(item) => {
                      return <DataItem data={item} onPress={this.handleViewOnPress}/>
                  }}>
            </List>;

        return (
            <Container>
                <Content>
                    {loadingView}
                </Content>
                <ModalComponent
                    visible={this.state.modalVisible}
                    data={this.state.modalData}
                    onClose={this.handleCloseModal}
                />
            </Container>
        );
    }
}