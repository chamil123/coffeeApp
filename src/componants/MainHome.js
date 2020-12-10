import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar,Image,ScrollView } from 'react-native';
import Swiper from "react-native-web-swiper";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { IMAGE } from '../constants/image';
export class MainHome extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="#009688" />
                <View style={{ height: 250 }}>
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
                                    style={{height:250,  width: 390 }}
                                >
                                </Image>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                        <Image source={IMAGE.ICON_SLIDE4}
                                    style={{height:250,  width: 400 }}
                                >
                                </Image>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                        <Image source={IMAGE.ICON_SLIDE5}
                                    style={{height:250,  width: 400 }}
                                >
                                </Image>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                        <Image source={IMAGE.ICON_SLIDE6}
                                    style={{height:250,  width: 400 }}
                                >
                                </Image>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
                        <Image source={IMAGE.ICON_SLIDE3}
                                    style={{height:250,  width: 400 }}
                                >
                                </Image>
                        </View>
                    </Swiper>
                </View>
                <View>
                <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>

                    <View style={styles.container}>

                        <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest', {
                                data: ''
                            })}>
                                <View style={{ alignItems: "center" }} >
                                    <View style={{ height: 55, padding: 0 }}>
                                        <Image source={IMAGE.ICON_COFFEE}
                                            style={{ height: 50, width: 60 }}
                                        >
                                        </Image>
                                    </View>

                                    <Text style={{ marginTop: 0, fontSize: 12 }}>Coffee </Text>

                                </View>
                            </TouchableOpacity>
                        </Card>


                        <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                <View style={{ alignItems: "center" }} >
                                    <View style={{ height: 55, padding: 0 }}>
                                        <Image source={IMAGE.ICON_FOOD}
                                            style={{ height: 50, width: 60 }}
                                        >
                                        </Image>
                                    </View>
                                    <Text style={{ marginTop: 0, fontSize: 12 }}>Food</Text>

                                </View>
                            </TouchableOpacity>
                        </Card>
                        <Card style={[styles.card, { backgroundColor: '#fff' }]} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreentest')}>
                                <View style={{ alignItems: "center" }} >
                                    <View style={{ height: 55, padding: 0 }}>
                                        <Image source={IMAGE.ICON_BEVERAGE}
                                            style={{ height: 50, width: 50 }}
                                        >
                                        </Image>
                                    </View>
                                    <Text style={{ marginTop: 0, fontSize: 12 }}>Beverage</Text>

                                </View>
                            </TouchableOpacity>
                        </Card>
                        <Card style={[styles.card, { backgroundColor: '#fff' }]} >
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
                        </Card>




                    </View>
                    </ScrollView>

                    <TouchableOpacity style={{ marginTop: 20 }}
                        onPress={() => this.props.navigation.navigate('TabScreentest')}

                    >
                        <Text>Mein</Text>

                    </TouchableOpacity>
                </View>
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
        paddingRight: 10,
      
        zIndex: 5,
    }, card: {
        height: 90,
        // width: (Dimensions.get("window").width / 2) - 20,
        // width: "45%",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        elevation: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'center',
        margin: 5
    }
});

