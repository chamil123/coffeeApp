import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import DynamicTabView from "react-native-dynamic-tab-view";
import { CustomHeader } from '../index';

import { Avatar, Icon, Badge } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import ResponsiveImage from "react-native-responsive-image";
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';


export class TabScreentest extends Component {

    constructor(props) {
        super(props);
        this.props.navigation.navigate.userName,

            // this.props.navigation.
            this.state = {

                isLoading: true,
                defaultIndex: 0,
                _image: '',
                data: [


                ]
            };

    }
    componentDidMount() {

        fetch('http://satasmemiy.tk/getsubcatwithfood', {
            method: 'get',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },


        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    data: responseJson
                }, function () {

                });
                // console.log(responseJson);
                // var datas=JSON.stringify(responseJson);

            }).catch((error) => {
                console.error(error);
            })
    }
    _renderItem = (item, index) => {

        var myloop = [];


        for (let i = 0; i < item.details.length; i++) {

            myloop.push(

                // <View key={item.val[i]["key"]} style={styles.container2}>
                <View key={item.details[i].id} style={styles.box}>
                    <Card style={styles.card} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CofeeDetails', {
                            id: item.details[i].id,
                            img: item.details[i]["img"],
                            item_nme: item.details[i]["name"],
                            description: item.details[i]["description"],
                            price: item.details[i]["price"],
                        })}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Animatable.View animation="bounceIn" style={{ height: 180, width: '100%', alignItems: 'center', justifyContent: 'center', }} >
                                    {/* <ResponsiveImage
                                     source={{ uri: "http://coffeeshopcheck3.000webhostapp.com/images/food/" + item.details[i]["img"] }}
                                    initWidth="200"
                                    // initHeight="200"
                                /> */}
                                    {/* <Text>{item.details[i]["img"] }</Text> */}
                                    <ImageBackground
                                        source={{ uri: "http://satasmemiy.tk/images/food/" + item.details[i]["img"] }}
                                        style={{
                                            flex: 1, alignSelf: 'stretch',
                                            resizeMode: 'cover',
                                            width: 175, height: 160,
                                            alignItems: 'center', justifyContent: 'center'
                                        }}
                                    >
                                    </ImageBackground>


                                    {/* <View style={{  }}>
                                    <Image source={{ uri: "http://coffeeshopcheck3.000webhostapp.com/images/food/" + item.details[i]["img"] }} style={{ width: 180, height: 140 }} />
                                </View> */}
                                </Animatable.View>
                            </View>
                            <View style={{ paddingRight: 10, paddingLeft: 10, marginTop: -25, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <Text style={{ fontSize: 15 }}>{item.details[i]["name"]}</Text>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>$ {item.details[i]["price"]}</Text>
                            </View>
                            <View style={{ paddingLeft: 10, alignContent: 'flex-start', width: '100%' }}>
                                <Text numberOfLines={3} ellipsizeMode="tail" style={{ fontSize: 11, color: 'gray' }}>
                                    {item.details[i]["description"]}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    </Card>
                </View>
                // </View>

            );
        }
        return (

            <View>
                <ScrollView

                    horizontal={false}
                    alwaysBounceVertical={true}
                    showsHorizontalScrollIndicator={false}

                >
                    <View

                        id={item.id}
                        style={{ flex: 1 }}
                    >
                        {/* <Text>{item.val[0].ccc}</Text> */}


                        <View style={styles.container3}>

                            {myloop}


                        </View>
                    </View>
                    {/* <Image source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }} style={{ width: 50, height: 50 }} /> */}
                </ScrollView>


            </View>

        );
    };
    7


    render() {

        // const { navigation } = this.props;  
        // const user_name = navigation.getParam('userName');  

        let { isLoading } = this.state
        if (isLoading) {
            return (
                <SafeAreaView style={{ flex: 1, backgroundColor: '#afcecb' }}>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" />
                    {/* <CustomHeader title="" isPost isHome={false} bdcolor='#00897b' navigation={this.props.navigation} /> */}
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                        <Avatar
                            rounded
                            size={38}
                            containerStyle={{
                                backgroundColor: 'white',
                                shadowColor: 'rgba(0,0,0, .4)', // IOS
                                shadowOffset: { height: 2, width: 5 },  // IOS
                                shadowOpacity: 3, // IOS
                                shadowRadius: 5, elevation: 4
                            }}
                        >
                            <MaterialIndicator style={{ marginTop: -35 }} color='#009984' size={25} />
                        </Avatar>
                    </View>

                </SafeAreaView>

            );
        } else {
            return (
                <SafeAreaView style={{ flex: 1, backgroundColor: '#afcecb' }}>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" />
                    <DynamicTabView
                        data={this.state.data}
                        renderTab={this._renderItem}
                        defaultIndex={this.state.defaultIndex}
                        // containerStyle={styles.container}
                        headerBackgroundColor={'white'}

                        headerTextStyle={styles.headerText}
                        onChangeTab={this.onChangeTab}

                        headerUnderlayColor={'#009984'}
                        headerUnderStyle={styles.headerStyle}
                        height={100}

                    />
                </SafeAreaView>
            );
        }
    }
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'red',
    //     height: 50,

    // },
    // `headerContainer: {
    //   marginTop: 16
    // },`
    headerText: {
        color: 'black'
    },
    headerStyle: {
        height: 500,
    }
    , card: {
        height: 230,
        backgroundColor: 'rgba(255, 255, 255,1)',
        borderRadius: 15,
        elevation: 1,
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        // alignItems: 'center',
        margin: 7
    },
    container3: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    , box: {
        width: '50%',
        // height: '60%',
        // padding: 2,
    }
    // , inner: {
    //     flex: 1,
    //     backgroundColor: '#aaa',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
    // tabItemContainer: {
    //   backgroundColor: "#cf6bab"
    // }
});