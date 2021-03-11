import React, { Component } from 'react';
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { List, ListItem, Left, Body, Right } from 'native-base';
import { Icon, Avatar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import mockMoview from '../mockMovies';
import MoviewRow from '../constants/MovieRow';
import { CustomHeader } from '../index';
import Database from '../Database';
import Star from 'react-native-star-view';
import { StatusBar } from 'react-native';
import { parse } from 'react-native-svg';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import * as Animatable from 'react-native-animatable';
import SwitchSelector from "react-native-switch-selector";
import { TagSelect } from 'react-native-tag-select';

import UIStepper from 'react-native-ui-stepper';
const db = new Database();

const options = [
  { label: "Small", value: "15" },
  { label: "Medium", value: "30" },
  { label: "Large", value: "45" }
];
const sugar = [
  { label: "White", value: "15" },
  { label: "Brown", value: "30" },

];
export class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      // _price: options[0].value,
      _name: this.props.route.params.item_nme,
      _id: this.props.route.params.id,
      _image: this.props.route.params.img,
      dbs: '',
      _qty: 1,
      value: 25,
      labelSizes: 18,
      colors: 'black',
      position: 0,
      addextra_total: 0,
      sml_val: 0,
      SelectedButton: '',
      param_price: this.props.route.params.price

    };
    db.initDB().then((result) => {
      this.loadDbVarable(result);
    })
    this.loadDbVarable = this.loadDbVarable.bind(this);

  }
  changeSML(value) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> : " + value);
    var smlval = value;
    var total = parseFloat(smlval);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>" + total);
    this.setState({
      sml_val: total
    })
  }
  loadDbVarable(result) {
    this.setState({
      dbs: result,
    });

  }
  valueChange(position) {


    // this.setState({
    //   colors: 'red',
    //   position:position
    // });


  }
  componentDidUpdate() {

    // if (position == 1) {
    //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> : " + position);
    //   this.setState({
    //     colors: 'red',
    //     position:position
    //   });
    // } else if (position == 2) {
    //   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ : " + position);
    //   // this.setState({
    //   //   labelSizes: 22,
    //   // });
    // }
  }
  addToCart = () => {
    let { pId, pOnePrice, pQty, newPrice = 0, innervalue = 0 } = this.props
    let dataa = {
      p_id: this.state._id,
      p_name: this.state._name,
      p_price: this.state._price,
      p_description: this.props.route.params.description,
      p_image: this.state._image,
      pQty: this.state._qty,
    }
    db.listCartItems(this.state.dbs).then((data) => {
      let result = data;
      if (result == 0) {
        db.addtocart(this.state.dbs, dataa).then((result) => {
          this.props.navigation.navigate('TabScreentest', {
            userName: 'cccccccccccccccc',
          });
        }).catch((err) => {
          console.log(err);
        })
        this.setState({
          isLoading: false,
        });
      } else {

        for (var i = 0; i < result.length; i++) {
          pId = result[i].pId;
          pOnePrice = result[i].pOnePrice;
          pQty = result[i].pQty;
          if (result[i].pId == this.state._id) {
            innervalue = 1;
          }
        }
        if (innervalue == 1) {

          newPrice = (pQty + 1) * pOnePrice;
          db.updateCart(this.state.dbs, newPrice, this.state._id).then((result) => {
            this.props.navigation.navigate('TabScreentest');
          }).catch((err) => {
            console.log(err);
          })
        } else {
          db.addtocart(this.state.dbs, dataa).then((result) => {
            this.props.navigation.navigate('TabScreentest');
          }).catch((err) => {
            console.log(err);
          })
        }

      }
    }).catch((err) => {
      console.log(err);
    })

  }


  async componentDidMount() {


    this.setState({
      isLoading: false,

    });

    // const responseJson = await response;
    // .then((responseJson) => {

    //   this.data = responseJson;

    // Alert.alert("sadasd " + responseJson);
    // console.log(JSON.parse(responseJson));

    // }).catch((error) => {
    //   console.error(error);
    // });
    // }).then((response) => response.json())
    //     .then((responseJson) => {

    //      this.data = responseJson;
    //      this.setState({ loading: false });

    //      console.log("asdasdasdasd asd>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> : "+response);
    // }).catch((error) => {
    //   console.error(error);
    // });
  }
  setValue = (value) => {
    var price = this.state.param_price * value;
    this.setState({
      isLoading: false,
      _price: price,
      _qty: value
    })


  }
  // _handleClick(button) {
  //   var smlval = 0;
  //   if (button == "1") {
  //     smlval = 10;
  //   } else if (button == "2") {
  //     smlval = 20;
  //   } else if (button == "3") {
  //     smlval = 30;
  //   }

  //   this.setState({
  //     SelectedButton: button,
  //     sml_val: smlval
  //   })
  // }
  _handleClick3(button) {
    var responsejson = JSON.stringify(this.tag.itemsSelected);
    const valuesArray = JSON.parse(responsejson);
    var total = 0;
    valuesArray.map(item => {
      total += parseFloat(item.val);
    })
    this.setState({ addextra_total: total })
  }
  render() {
    const data = [
      { id: 1, label: 'Full Cream', val: '5' },
      { id: 2, label: 'Skim', val: '10' },
      { id: 3, label: 'Soy', val: '15' },
      { id: 4, label: 'Almond', val: '25' },
      { id: 5, label: 'Oat', val: '20' },
    ];

    const { img, item_nme, description, price } = this.props.route.params;
    const starStyle = {
      width: 100,
      height: 20,
      marginBottom: 0,
      marginTop: 0,
    };

    const { movies } = this.state
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00897b" />
        <CustomHeader title="" isPost bgcolor='#00897b' isHome={false} bdcolor='#00897b' navigation={this.props.navigation} />
        {/* <View style={{ flex: 1, }}> */}
        {/* <View style={{ marginLeft: 20, marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My Order</Text>
          </View> */}


        <ParallaxScrollView
          backgroundColor="#00897b"
          contentBackgroundColor="#F2F2F2"
          parallaxHeaderHeight={300}
          renderForeground={() => (
            <View style={{ height: 300, flex: 1, }}>
              <View style={{ width: 290, height: 290, borderRadius: 200, backgroundColor: '#009984', zIndex: -1, position: 'absolute', marginLeft: 55 }}>

              </View>
              <Animatable.View style={{ justifyContent: 'center', alignItems: 'center', margin: 30, marginTop: 0 }} animation="bounceInDown">
                <ImageBackground
                  source={{ uri: "http://coffeeshopcheck3.000webhostapp.com/images/food/" + img }}
                  style={{ height: '105%', width: '100%', resizeMode: 'contain', zIndex: -1 }}
                >
                </ImageBackground>
              </Animatable.View>
            </View>
          )}>
          <View style={{ backgroundColor: '#00897b' }}>
            <View style={styles.footer}>
              <View style={{ paddingLeft: 20, paddingRight: 10 }}>
                <Text style={{ color: 'black', fontSize: 28, paddingBottom: 10, fontWeight: 'bold' }}>{item_nme}</Text>

             
                <Star score={4.7} style={starStyle} />

              
                <Text style={{ color: 'gray', textAlign: 'justify', fontSize: 15, marginBottom: 10 }}>{description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                </View>
              

                <Animatable.View animation="flipInX" style={{ marginBottom: 20 }}>

                  <SwitchSelector
                    options={options}
                    initial={0}
                    selectedColor={'white'}
                    buttonColor={'#00897b'}
                    borderColor={'white'}
                    height={45}
                    // hasPadding
                    options={options}
                    onPress={value => this.changeSML(value)}

                  />

                </Animatable.View>
               

                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
                  <Text style={{ marginBottom: 10 }}>Add Extra</Text>
                  <ScrollView

                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <TagSelect
                      data={data}
                      max={3}
                      ref={(tag) => {
                        this.tag = tag;
                      }}

                      onItemPress={() => this._handleClick3(this.tag)}
                    />

                  </ScrollView>
                </View>

                <View style={{ marginTop: 10, width: 140 }}>
                  <Text style={{ paddingVertical: 8 }}>Sugar Type </Text>
                  <SwitchSelector
                    options={sugar}
                    initial={0}
                    selectedColor={'white'}
                    buttonColor={'brown'}
                    borderColor={'white'}
                    height={35}
               
                    options={sugar}
                
                  />
                </View>
         
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
                  <View>

                    <Text >Total</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 38, color: 'red', marginTop: -2 }}>$ {parseFloat(this.state._price) + parseFloat(this.state.addextra_total) + parseFloat(this.state.sml_val)}</Text>
                  </View>
                  <View style={{ marginTop: 22 }}>
                    <UIStepper
                      borderRadius={25}
                      height={40}
                      width={130}

                      initialValue={1}
                      minimumValue={1}
                      borderColor={"#00897b"}
                      tintColor={"#00897b"}
                      displayValue={true}
                      onValueChange={(value) => { this.setValue(value) }}
                    />
                  </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                  <View>
               
                  </View>

                </View>
              </View>
            </View>

          </View>

        </ParallaxScrollView>
        <View style={{ alignItems: 'flex-end', backgroundColor: 'white', borderRadius: 20 }}>

          <View style={{ padding: 10, flexDirection: 'row', }}>

            <TouchableOpacity style={styles.buttongeart} onPress={() => this.props.navigation.navigate('WishList')}>
              <Icon name="heart-outline" size={25} style={{ color: '#00897b', padding: 0 }} />
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonstyle} onPress={this.addToCart}>
              <Text style={{ color: 'white' }}>Make Order</Text>
            </TouchableOpacity>

          </View>

        </View>
 

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    backgroundColor: "red",

    borderRadius: 25,


    width: 110,
  }, buttonstyle: {
    backgroundColor: "#009984",
    borderRadius: 15,
    width: "70%",
    padding: 0,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',

  }, footer: {
    backgroundColor: '#F2F2F2',
    flex: 3,
    zIndex: -1,
    // flex: 1,
    // flexDirection: 'row',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingRight: 10,
    paddingTop: 10

  }
})