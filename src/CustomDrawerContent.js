import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
export class CustomDrawerContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            abc: '',
        }
    }


    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', opacity: 0.9 }}>
                <ScrollView>
                    <View style={{backgroundColor:'#0C5D39',paddingTop:5,paddingBottom:10}}>
                        <TouchableOpacity style={[{ paddingLeft:10,paddingRight:10,paddingTop:2 }]} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <View style={{ flexDirection: "row", padding: 5, backgroundColor: '#3B7457' }}>
                                <Icon

                                    name='user'
                                    type='font-awesome'
                                    color='white'
                                    iconStyle={{ fontSize: 25, fontWeight: 'normal', paddingLeft: 15, paddingRight: 15, paddingTop: 3 }}
                                />
                                {/* <View style={styles.SeparatorLine} /> */}
                                <Text style={{ paddingLeft: 5, paddingTop: 8, paddingBottom: 11, color: 'white' }}>Login Or Register </Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={[{  paddingLeft:10,paddingRight:10,paddingTop:2  }]} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('member')}>
                            <View style={{ flexDirection: "row", padding: 5, backgroundColor: '#3B7457' }}>
                                <Icon
                                    name='home'
                                    type='font-awesome'
                                    color='white'
                                    iconStyle={{ fontSize: 25, fontWeight: 'normal', paddingLeft: 15, paddingRight: 15, paddingTop: 3 }}
                                />
                                <View style={styles.SeparatorLine} />
                                <Text style={{ paddingLeft: 5, paddingTop: 8, paddingBottom: 11, color: 'white' }}>Home </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[{ paddingLeft:10,paddingRight:10,paddingTop:2  }]} activeOpacity={0.5} >
                            <View style={{ flexDirection: "row", padding: 5, backgroundColor: '#3B7457' }}>
                                <Icon
                                    name='university'
                                    type='font-awesome'
                                    color='white'
                                    iconStyle={{ fontSize: 18, fontWeight: 'normal', paddingLeft: 15, paddingRight: 15, paddingTop: 8 }}
                                />
                                <View style={styles.SeparatorLine} />
                                <Text style={{ paddingLeft: 5, paddingTop: 8, paddingBottom: 11, color: 'white' }}>About Us </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{ paddingLeft:10,paddingRight:10,paddingTop:2  }]} activeOpacity={0.5} onPress={() => this.doLogout()}>
                            <View style={{ flexDirection: "row", padding: 5, backgroundColor: '#3B7457' }}>
                                <Icon
                                    name='id-card'
                                    type='font-awesome'
                                    color='white'
                                    iconStyle={{ fontSize: 18, fontWeight: 'normal', paddingLeft: 15, paddingRight: 15, paddingTop: 8 }}
                                />
                                <View style={styles.SeparatorLine} />
                                <Text style={{ paddingLeft: 5, paddingTop: 8, paddingBottom: 11, color: 'white' }}>Loyality Card  </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    profile: {
        width: 80,
        height: 80,
        borderWidth: 8,
        borderRadius: 40,
        borderColor: '#fff'
    }, FacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        // backgroundColor: '#f78a2c',
        //borderWidth: .5,
        // borderColor: '#fff',
        height: 50,


        //borderRadius: 5,
        // margin: 5,

    }, ImageIconStyle: {
        padding: 10,
        margin: 15,
        height: 25,
        width: 25,
        resizeMode: 'stretch',

    }, TextStyle: {
        // color:'#fff'
    }
});