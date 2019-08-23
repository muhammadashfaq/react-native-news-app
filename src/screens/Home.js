import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs,Left, Body, Right, Title} from 'native-base';
import General from './tabs/general';
import Business from './tabs/business';
import Technology from './tabs/technology';

class TabsScreen extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs style={{backgroundColor: "blue"}}>
                    <Left/>
                    <Body>
                        <Title style={{color: 'white'}}>NewsApp</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}} >
                    <Tab heading="General" tabStyle={{backgroundColor: 'blue'}}
                         activeTabStyle={{backgroundColor: 'blue'}}
                        textStyle={{color: 'white'}}
                        activeTextStyle={{color: 'white'}}>
                        <General />
                    </Tab>
                    <Tab heading="Business" tabStyle={{backgroundColor: 'blue'}}
                         activeTabStyle={{backgroundColor: 'blue'}}
                         textStyle={{color: 'white'}}
                         activeTextStyle={{color: 'white'}}>
                        <Business />
                    </Tab>
                    <Tab heading="Technology" tabStyle={{backgroundColor: 'blue'}}
                         activeTabStyle={{backgroundColor: 'blue'}}
                         textStyle={{color: 'white'}}
                         activeTextStyle={{color: 'white'}}>
                        <Technology />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default TabsScreen;