import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { IMAGE } from './constants/image';
import { Avatar } from 'react-native-elements';


const styles = StyleSheet.create({
  text: {
    height: 40, backgroundColor: 'white', borderRadius: 5, padding: 10,
  },
  textvalid: {
    backgroundColor: 'red',
  },
  textinvalid: {
    backgroundColor: '#009688',
  },
});


export class CustomHeader extends Component {
  render() {
    let { navigation, isHome, title, bgcolor, bdcolor, isPost } = this.props
    return (
      <View style={{ flexDirection: 'row', backgroundColor: bgcolor, height: 55, borderBottomColor: bdcolor, borderBottomWidth: 1 }} >


        <View style={{ flex: 1, justifyContent: 'center' }}>
          {
            isHome ?
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 18 }}
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon
                  // raised
                  name='bars'
                  type='font-awesome'
                  color='white'
                  iconStyle={{ fontSize: 30, fontWeight: 'normal' }}
                  onPress={() => navigation.openDrawer()} />
                {/* <Image style={{ width: 28, height: 28, marginLeft: 0,padding:4 }}
                  source={IMAGE.ICON_MENU_ICON}
                  resizeMode="contain"

                /> */}
              </TouchableOpacity>

              :
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 18, backgroundColor: '#e0f2f1', padding: 5, paddingLeft: -5, width: 40, borderRadius: 15 }}
                onPress={() => this.props.navigation.goBack()}
              >

                <Icon
                  // raised
                  name='angle-left'
                  type='font-awesome'
                  color='black'
                  iconStyle={{ fontSize: 34, marginLeft: 6 }}
                  onPress={() => this.props.navigation.goBack()} />

                {/* <Image style={{ width: 20, height: 20, marginLeft: 10 }}
                  source={IMAGE.ICON_BACK}
                  resizeMode="contain"
                /> */}
                {/* <Text>Back</Text> */}
              </TouchableOpacity>

          }

        </View>



        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>{title}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {
            isPost ?
              <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Cart')}>
                <View style={{  padding: 10 }}>
                  {/* 
                  <View style={{marginLeft:60}}>
                    <View style={{ zIndex: 5,top:0, backgroundColor: 'green', marginLeft:10}}>
                      <Text>5</Text>
                    </View>
                    <View style={{ position:'absolute',zIndex: -1,backgroundColor: 'red', }}>
                      <Icon
                        // raised
                        name='shopping-cart'
                        type='font-awesome'
                        color='white'
                        iconStyle={{ fontSize: 30, fontWeight: 'normal' }}
                        onPress={() => this.props.navigation.navigate('Cart')} />
                    </View>
                  </View> */}
                 <Icon
                        // raised
                        name='shopping-cart'
                        type='font-awesome'
                        color='white'
                        iconStyle={{ fontSize: 30, fontWeight: 'normal' }}
                        // onPress={() => this.props.navigation.navigate('Cart')}
                         />

                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{ position: 'absolute',left:70,top:5  }}
                  />

                </View>


              </TouchableOpacity>
              : null

          }

        </View>
      </View>
    )
  }
}