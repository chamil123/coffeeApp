import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, Dimensions } from 'react-native';
import Swiper from "react-native-web-swiper";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { IMAGE } from '../constants/image';
// import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export class MainHome extends Component {
    constructor(props) {
        super(props)

    }
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3B7457" />

                <View style={{ backgroundColor: '#3B7457', height: 55, }}>
                    <View style={{ marginTop: 0, paddingLeft: 15, paddingRight: 15, }}>
                        {/* <Text style={{fontSize:23,color:'white',fontWeight:'bold'}}>Welcome Marlan</Text>
                        <Text style={{fontSize:15,color:'white',marginTop:-5,marginBottom:5}}>Lest search sdasdas asd asd</Text> */}
                        <View style={{ alignItems: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 0.5, borderRadius: 25, backgroundColor: '#F2F2F2', paddingLeft: 10, height: 42 }}>
                            <Icon name="search" type='font-awesome' size={20} style={{ color: '#9e9e9e', paddingRight: 5 }} />
                            <TextInput style={{ width: '85%' }} placeholder="Search..." onEndEditing={this.clearFocus} autoFocus={false} />
                        </View>
                    </View>
                </View>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={{ height: 230 }}>
                        <Swiper
                            horizontal
                            loop
                            timeout={-3.5}
                            controlsProps={{
                                dotActiveStyle: { backgroundColor: 'red' },
                                // cellsContent: {
                                //     'bottom-left': (<Text>SOME LOGO</Text>),
                                // }
                            }}
                        >
                            {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
                        
                            
                            <Image source={IMAGE.ICON_SLIDE1}
                                    style={{height:250,  width: 400 }}
                                >
                                </Image>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,200,20,0.3)" }}>
                        <Image source={IMAGE.ICON_SLIDE2}
                                    style={{height:250,  width: 400 }}
                                >
                                </Image>
                        </View> */}
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE7}
                                    style={{ height: 250, width: 390 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE4}
                                    style={{ height: 250, width: 400 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE5}
                                    style={{ height: 250, width: 400 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE6}
                                    style={{ height: 250, width: 400 }}
                                >
                                </Image>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                                <Image source={IMAGE.ICON_SLIDE3}
                                    style={{ height: 250, width: 400 }}
                                >
                                </Image>
                            </View>
                        </Swiper>
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 15, paddingTop: 20 }}>Our Category</Text>
                        <View style={{ borderTopWidth: 4, borderTopColor: "#009688", borderRadius: 3, marginHorizontal: 16, width: 45, marginTop: 10 }}></View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>

                            {/* <View style={styles.container}> */}
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.container}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                        <View style={styles.cardHorizontal} >
                                            <View style={{ height: 70, alignItems: 'center' }}>
                                                <Image source={IMAGE.ICON_COFFEE}
                                                    style={{ height: 110, width: 130 }}>
                                                </Image>
                                            </View>
                                            <View style={{ paddingRight: 5, paddingLeft: 5, marginTop: 35, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                <Text style={{ fontSize: 15 }}>Coffee</Text>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>$45</Text>
                                            </View>
                                            <View style={{ paddingLeft: 5, alignContent: 'flex-start', width: '100%' }}>
                                                <Text style={{ fontSize: 11, color: 'gray' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed rutrum neque.
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                        <View style={styles.cardHorizontal} >
                                            <View style={{ height: 70, alignItems: 'center' }}>
                                                <Image source={IMAGE.ICON_FOOD}
                                                    style={{ height: 100, width: 120 }}>
                                                </Image>
                                            </View>
                                            <View style={{ paddingRight: 5, paddingLeft: 5, marginTop: 35, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                <Text style={{ fontSize: 15 }}>Foods</Text>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>$45</Text>
                                            </View>
                                            <View style={{ paddingLeft: 5, alignContent: 'flex-start', width: '100%' }}>
                                                <Text style={{ fontSize: 11, color: 'gray' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed rutrum neque.
                                                </Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                        <View style={styles.cardHorizontal} >
                                            <View style={{ height: 70, alignItems: 'center' }}>
                                                <Image source={IMAGE.ICON_BEVERAGE}
                                                    style={{ height: 80, width: 130 }}>
                                                </Image>
                                            </View>
                                            <View style={{ paddingRight: 5, paddingLeft: 5, marginTop: 35, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                <Text style={{ fontSize: 15 }}>Beverage</Text>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>$45</Text>
                                            </View>
                                            <View style={{ paddingLeft: 5, alignContent: 'flex-start', width: '100%' }}>
                                                <Text style={{ fontSize: 11, color: 'gray' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed rutrum neque.
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                        <View style={styles.cardHorizontal} >
                                            <View style={{ height: 70, alignItems: 'center' }}>
                                                <Image source={IMAGE.ICON_TEA}
                                                    style={{ height: 100, width: 80 }}>
                                                </Image>
                                            </View>
                                            <View style={{ paddingRight: 5, paddingLeft: 5, marginTop: 35, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                <Text style={{ fontSize: 15 }}>Tea</Text>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>$45</Text>
                                            </View>
                                            <View style={{ paddingLeft: 5, alignContent: 'flex-start', width: '100%' }}>
                                                <Text style={{ fontSize: 11, color: 'gray' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed rutrum neque.
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                            {/* <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest', {
                                        data: ''
                                    })}>
                                        <View style={{ alignItems: "center" }} >
                                            <View style={{ height: 55, padding: 0 }}>
                                                <Image source={IMAGE.ICON_COFFEE}
                                                    style={{ height: 55, width: 65 }}
                                                >
                                                </Image>
                                            </View>

                                            <Text style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Coffee </Text>

                                        </View>
                                    </TouchableOpacity>
                                </Card>


                                <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                        <View style={{ alignItems: "center" }} >
                                            <View style={{ height: 55, padding: 0 }}>
                                                <Image source={IMAGE.ICON_FOOD}
                                                    style={{ height: 55, width: 65 }}
                                                >
                                                </Image>
                                            </View>
                                            <Text style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Food</Text>

                                        </View>
                                    </TouchableOpacity>
                                </Card> */}
                            {/* <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                        <View style={{ alignItems: "center" }} >
                                            <View style={{ height: 55, padding: 0 }}>
                                                <Image source={IMAGE.ICON_BEVERAGE}
                                                    style={{ height: 55, width: 55 }}
                                                >
                                                </Image>
                                            </View>
                                            <Text style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Beverage</Text>

                                        </View>
                                    </TouchableOpacity>
                                </Card>
                                <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                        <View style={{ alignItems: "center" }} >
                                            <View style={{ height: 55, padding: 0 }}>
                                                <Image source={IMAGE.ICON_TEA}
                                                    style={{ height: 55, width: 55 }}
                                                >
                                                </Image>
                                            </View>
                                            <Text style={{ marginTop: 0, fontSize: 12, fontWeight: 'bold' }}>Tea</Text>

                                        </View>
                                    </TouchableOpacity>
                                </Card> */}
                            {/* <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                    <View style={{ alignItems: "center" }} >
                                        <View style={{ height: 55, padding: 0 }}>
                                            <Image source={IMAGE.ICON_TEA}
                                                style={{ height: 50, width: 50 }}
                                            >
                                            </Image>
                                        </View>
                                        <Text style={{ marginTop: 0, fontSize: 12 }}>Tea</Text>

                                    </View>
                                </TouchableOpacity>
                            </Card> */}



                            {/* </View> */}
                        </ScrollView>

                        {/* <TouchableOpacity style={{ marginTop: 20 }}
                        onPress={() => this.props.navigation.navigate('TabScreentest')}

                    >
                

                    </TouchableOpacity> */}
                        <View style={{ backgroundColor: 'white', marginTop: 10, padding: 12 }}>
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
                        </View>
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
    }, card: {
        height: 200,
        // width: (Dimensions.get("window").width / 2) - 20,
        width: 70,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 12,
        elevation: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'center',
        margin: 5
    }, cardHorizontal: {
        height: 200,

        backgroundColor: 'white',
        // width: 300,
        width: (Dimensions.get("window").width) - 210,
        // width: "90%",
        // backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        elevation: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.7,
        shadowRadius: 8,
        // alignItems: 'center',


        margin: 8
    }
});

