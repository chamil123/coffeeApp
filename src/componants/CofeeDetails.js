import React, { Component } from 'react';
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView, Alert } from 'react-native';
import { IMAGE } from '../constants/image';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Avatar } from 'react-native-elements';
import Star from 'react-native-star-view';
import { CustomHeader } from '../index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UIStepper from 'react-native-ui-stepper';
export class CofeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      _price: this.props.route.params.price,
      param_price: this.props.route.params.price,
      _id: this.props.route.params.id

    };

  }
  insertInvoice = () => {
    const { _id } = this.state;
    const { _qty } = this.state;


    fetch('http://coffeeshopcheck3.000webhostapp.com/api/neworder', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: '2',
        // imagename: 'sdasdasd',
        foods: [{
          product_id: _id,
          qty: _qty,
        }],


      })

    }).then((response) => response.json())
      .then((customerselect) => {
        Alert.alert(JSON.stringify(customerselect))

        // global.customerdata = JSON.stringify(customerselect)
        // var customername = JSON.parse(customerdata);
        // //alert(JSON.stringify(customername));
        // for (i = 0; i < customername.cus_data.length; i++) {
        //   var dataa = customername.cus_data[i]["account_name"];
        //   account_nam.push(dataa)
        // }
        // this.setState({ accountnameMain: account_nam });
      })
  }
  componentDidMount() {


    // const responseJson = await response;
    // .then((responseJson) => {

    //   this.data = responseJson;

    // Alert.alert("sadasd " + responseJson);
    // console.log(JSON.parse(responseJson));
    // console.log("asdasdasdasd asd>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> : " + responseJson);
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
  render() {
    const { img, item_nme, description, price } = this.props.route.params;
    const starStyle = {
      width: 100,
      height: 20,
      marginBottom: 20,
      marginTop: 10,
    };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#00897b' }}>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00897b" />
        <CustomHeader title="" isPost isHome={false} bdcolor='#00897b' navigation={this.props.navigation} />

        <View style={styles.header}>
          <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30, marginTop: 0 }}>
            <ImageBackground
              source={{ uri: "http://coffeeshopcheck3.000webhostapp.com/images/food/" + img }}
              style={{ height: '105%', width: '100%', resizeMode: 'contain',zIndex:-1 }}
            >
            </ImageBackground>
          </View>
          <View style={{ flexDirection: 'row-reverse', marginHorizontal: 30, top: -25 }}>
            <Avatar
              rounded
              size={48}
              containerStyle={{
                backgroundColor: 'white',
                shadowColor: 'rgba(0,0,0, .4)', // IOS
                shadowOffset: { height: 2, width: 5 },  // IOS
                shadowOpacity: 3, // IOS
                shadowRadius: 5, elevation: 4
              }}
            >
              <Icon name="heart-outline" size={25} style={{ color: 'gray', padding: 11 }} />
            </Avatar>

          </View>
        </View>

        <View style={styles.footer}>

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <View style={{ flexDirection: 'row-reverse', marginHorizontal: 5, zIndex: 5,  }}>


          </View> */}
            {/* </View> */}
            <View style={{ paddingLeft: 20 }}>
              <Text style={{ color: 'black', fontSize: 28, paddingBottom: 10, fontWeight: 'bold' }}>{item_nme}</Text>

              {/* <Star score={5} style={starStyle} /> */}
              {/* <AirbnbRating

            /> */}

              {/* <Text style={{ color: '#7b412d', fontSize: 20, paddingBottom: 10, fontWeight: 'bold' }}>Product Description</Text> */}
              <Text style={{ color: 'gray', textAlign: 'justify', fontSize: 15 }}>{description}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Star score={4.7} style={starStyle} />

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: -5 }}>
                <View>
                  <Text >Total</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 38, color: 'red', marginTop: -2 }}>$ {this.state._price}</Text>
                </View>
                <View style={{ marginTop: 22 }}>
                  <UIStepper
                    borderRadius={25}
                    height={40}
                    width={130}
                    // value={1}
                    initialValue={1}
                    // minimumValue={2}
                    borderColor={"#00897b"}
                    tintColor={"#00897b"}
                    displayValue={true}
                    onValueChange={(value) => { this.setValue(value) }}
                  />
                </View>

              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                <View>
                  <TouchableOpacity style={styles.button} onPress={this.insertInvoice}>
                    {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BMIMeter')}> */}
                    <Text style={styles.buttonText}>Make Order</Text>
                  </TouchableOpacity>
                </View>

              </View>

            </View>
            <View>

            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({





  header: {
    flex: 2,
    backgroundColor: '#00897b'
  }, footer: {
    backgroundColor: '#fff',
    flex: 3,
    zIndex: -1,
    // flex: 1,
    // flexDirection: 'row',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingRight: 10,
    paddingTop: 10

  }, button: {

    backgroundColor: "red",
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    marginTop: -5,
    marginLeft: 18,
    marginBottom: 10,
    // marginVertical: 5,
    //  zIndex:5
  }, buttonText: {
    fontSize: 15,
    color: '#fff',
  }
  , brestposition3: {
    width: 260,
    height: 260,
    marginRight: -30,
    marginTop: -30,
    flexDirection: 'row-reverse',
    backgroundColor: 'rgba(102, 51, 33, 0.8)',
    borderRadius: 130,
    // overflow: 'hidden',
    zIndex: -2,
    position: 'absolute'
  }, brestposition4: {
    width: 170,
    height: 170,
    // marginRight: 12,
    marginTop: 12,
    marginLeft: 42,
    backgroundColor: 'rgba(123, 65, 45, 1)',
    borderRadius: 110,
    // overflow: 'hidden',
    zIndex: -1,

    position: 'absolute'
  }, button: {
    backgroundColor: "#00897b",
    padding: 15,
    borderRadius: 25,
    // width:'200',
    width: 350,

    marginTop: 13,
    //marginLeft: 18,
    // marginVertical: 5
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
});