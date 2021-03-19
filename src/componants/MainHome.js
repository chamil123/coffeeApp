import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, Dimensions } from 'react-native';
import Swiper from "react-native-web-swiper";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { IMAGE } from '../constants/image';
import { List, ListItem, Left, Body, Right } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import Star from 'react-native-star-view';
// import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
export class MainHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
            ]
        };
    }
    state = {
        search: '',
    };
    componentDidMount() {

        fetch('http://satasmemiy.tk/getAllsubcategory', {
            method: 'get',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },


        }).then((response) => response.json())
            .then((responseJson) => {
                var datas = JSON.stringify(responseJson);

                this.setState({
                    isLoading: false,
                    data: responseJson

                }, function () {

                });

            }).catch((error) => {
                console.error(error);
            })
    }
    updateSearch = (search) => {
        this.setState({ search });
    };

    renderItem = ({ item }) => {

        return (

            <ListItem
                style={{
                    // paddingTop: 15,
                    // flexDirection: 'row',
                    marginBottom: 10,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: 15,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 0
                    },
                    shadowOpacity: 1,
                    shadowRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: item.color,
                    // marginLeft: 10,
                }}
            >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest', {
                    categpry_name: item.name
                })}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: -15, marginLeft: 5, marginBottom: -20 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                            <ImageBackground
                                source={{ uri: item.image }}
                                style={{
                                    bottom: 50,
                                    // flex: 1, 
                                    // alignSelf: 'stretch',
                                    resizeMode: 'cover',
                                    width: 105, height: 90,
                                }}
                            >
                            </ImageBackground>
                        </View>
                        <View style={{ bottom: 30 }}>
                            <Text style={styles.dateText, { fontWeight: 'bold' }}>{item.name} </Text>

                        </View>
                        <View style={{ bottom: 20 }}>
                            <TouchableOpacity onPress={() => handleAddTask()}>
                                <View style={styles.addWrapper}>
                                    <Text style={styles.addText}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>
            </ListItem>
        );

    };

    keyExtractor = (item, index) => index.toString()

    render() {
        const { search } = this.state;
        const starStyle = {
            width: 70,
            height: 15,
            marginBottom: 0,
            marginTop: 0,
        };
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3B7457" />
                <View style={{ backgroundColor: '#3B7457', height: 130, }}>
                <View style={{marginLeft:20,marginBottom:10,marginTop:-5}}>
                    
                    <Text style={{fontWeight:'bold',fontSize:32,color:'white'}}>Welcome To</Text>
                    <Text style={{fontWeight:'normal',fontSize:20,color:'white'}}>Marlen's Wherehouse</Text>
                </View>
                    <View style={{ marginTop: 0, paddingLeft: 15, paddingRight: 15, }}>

                        <View style={{ alignItems: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 0.5, borderRadius: 25, backgroundColor: '#F2F2F2', paddingLeft: 10, height: 42 }}>
                            <Icon name="search" type='font-awesome' size={20} style={{ color: '#9e9e9e', paddingRight: 5 }} />
                            <TextInput style={{ width: '85%' }} placeholder="Search..." onEndEditing={this.clearFocus} autoFocus={false} />
                        </View>
                    </View>
                   
                </View>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={{ height: 250 }}>
                        <Swiper
                            horizontal
                            loop
                            timeout={-3.5}
                            controlsProps={{
                                dotActiveStyle: { backgroundColor: 'red' },
                            }}
                        >
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE7}
                                    style={{ height: 280, width: 390 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE4}
                                    style={{ height: 280, width: 400 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE5}
                                    style={{ height: 280, width: 400 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE6}
                                    style={{ height: 280, width: 400 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE3}
                                    style={{ height: 280, width: 400 }}
                                >
                                </Image>
                            </View>
                        </Swiper>
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 15, paddingTop: 20 }}>Our Category</Text>
                        <View style={{ borderTopWidth: 4, borderTopColor: "#009688", borderRadius: 3, marginHorizontal: 16, width: 45, marginTop: 10 }}></View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentInsetAdjustmentBehavior="automatic"
                        >

                            <FlatList
                                horizontal
                                contentContainerStyle={{
                                    // padding: 5,
                                    paddingTop: StatusBar.currentHeight || 0,
                                }}
                                ListEmptyComponent={this.emptyComponent}
                                scrollEnabled={false}
                                keyExtractor={this.keyExtractor}
                                data={this.state.data}
                                renderItem={this.renderItem}
                            />

                        </ScrollView>
                        <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 15, paddingTop: 0 }}>Favourites</Text>
                        <View style={[styles.card, { margin: 15 }]}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#F2F2F2', borderRadius: 200 }}>
                                    <Image source={IMAGE.ICON_ABTIMG6}
                                        style={{ height: 120, width: 120 }}
                                    >
                                    </Image>
                                </View>
                                <View style={{ margin: 10 }}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Blueberry Muffin</Text>
                                    <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 11, color: 'gray', width: 220, marginTop: 5 }}>
                                        Originally published on this day in 2014, these blueberry muffins are a personal and reader favorite. I found myself baking the muffins often, swapping blueberries for apples, peaches, and other fruits.
                                    </Text>
                                    <Star score={4.7} style={starStyle} />
                                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>$ 4</Text>

                                </View>
                            </View>

                        </View>
                        {/* <View style={[styles.card, { margin: 15 }]}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#F2F2F2', borderRadius: 200 }}>
                                    <Image source={IMAGE.ICON_ABTIMG6}
                                        style={{ height: 120, width: 120 }}
                                    >
                                    </Image>
                                </View>
                                <View style={{ margin: 10 }}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Blueberry Muffin</Text>
                                    <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 11, color: 'gray', width: 220, marginTop: 5 }}>
                                        Originally published on this day in 2014, these blueberry muffins are a personal and reader favorite. I found myself baking the muffins often, swapping blueberries for apples, peaches, and other fruits.
                                    </Text>
                                    <Star score={4.7} style={starStyle} />
                                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>$ 4</Text>

                                </View>
                            </View>

                        </View> */}
                        {/* <View style={{ backgroundColor: 'white', marginTop: 10, padding: 12 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Your Favourits</Text>
                            <Image source={IMAGE.ICON_FAVOURITE1}
                                style={{ height: 190, width: 365 }}
                            >
                            </Image>
                            <Text style={{ paddingTop: 5 }}>Cold Brew Coffee</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Price $35</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', marginTop: 20, padding: 12 }}>
                            <Image source={IMAGE.ICON_FAVOURITE2}
                                style={{ height: 190, width: 365 }}
                            >
                            </Image>
                        </View> */}
                    </View>
                </ScrollView>
            </View>
        );
    }
} const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    addWrapper: {
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 0.2
    }
    , card: {
        height: 135,
        // width: (Dimensions.get("window").width / 2) - 20,
        // width: 70,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 8,
        elevation: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'flex-start',
        // margin: 5
    }
    // , cardHorizontal: {
    //     height: 200,

    //     backgroundColor: 'white',
    //     // width: 300,
    //     width: (Dimensions.get("window").width) - 210,
    //     // width: "90%",
    //     // backgroundColor: "white",
    //     borderRadius: 15,
    //     padding: 10,
    //     elevation: 0,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 3 },
    //     shadowOpacity: 0.7,
    //     shadowRadius: 8,
    //     // alignItems: 'center',


    //     // margin: 8
    // }
});

