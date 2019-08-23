import React ,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions,WebView,Share,Modal} from 'react-native'
import {Container,Header,Content,Body,Left,Right,Icon,Title,Button} from 'native-base'

const webViewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {

    constructor(props){
        super(props)
    }

    handleClose = () => {
        this.props.onClose();
    };

    handleShare = () => {
        const {url,title} = this.props.data;
        const message = `${title}\n\nRead More @${url}\n\nShared Via News App`
        return Share.share(
            {title: message,message,url: message},
            {dialogTitle:`Share ${title}`}
        )

    };

    render(){
        const {visible,data} = this.props;
        const {url,title} = data;
        if(url !== null) {
            return(
                <Modal
                    animationType={'slide'}
                    transparent
                    visible={visible}
                    onRequestClose={this.handleClose}>
                    <Container style={{margin: 15,marginBottom: 0,backgroundColor: 'white'}}>
                        <Header style={{backgroundColor: 'blue'}}>
                            <Left>
                                <Button onPress={this.handleClose} transparent>
                                    <Icon name={'close'} style={{color: 'white',fontSize: 35}}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title children={title} style={{color: 'white'}}/>
                            </Body>
                            <Right>
                                <Button onPress={this.handleShare} transparent>
                                    <Icon name={'share'} style={{color: 'white',fontSize: 35}}/>
                                </Button>
                            </Right>
                        </Header>
                        <Content contentContainerStyle={{height: webViewHeight}}>
                            <WebView source={{uri: url}} style={{flex: 1}}
                            onError={this.handleClose} startInLoadingState scalesPageToFit/>
                        </Content>
                    </Container>
                </Modal>
            )
        }else{
            return null
        }


    }
}


const styles = StyleSheet.create({

});

export default ModalComponent