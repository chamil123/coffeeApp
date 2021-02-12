import * as React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CofeeDetails, TabScreentest, Cart, TestScreen, MainHome, SplashScreen, SignIn, Home, Profile, Search, Details, Menu, PlaceOrder, FirstPage, MainPage, SignUp, WhereHouse, AboutUs, AboutUsScreeen } from './src/componants'


import { CustomDrawerContent } from './src';

const AuthStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
// const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const StackApp = createStackNavigator();
const MenuStack = createStackNavigator()
const Drawer = createDrawerNavigator();
const Wherehouse = createStackNavigator();
const AboutUss = createStackNavigator();

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="TabScreentest" options={{ headerShown: true, title: 'Our Menu', headerStyle: { backgroundColor: '#fff', elevation: 0 } }} component={TabScreentest} />
  </MenuStack.Navigator>
);


const navOptionHandler = () => ({
  headerShown: false
})


const DrawerStackScreen = ({ navigation }) => (
  <Drawer.Navigator initialRouteName="HomeScreen" drawerStyle={{ backgroundColor: 'transparent' }} initialRouteName="HomeScreen" drawerStyle={{ backgroundColor: 'transparent' }} drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
    <Drawer.Screen name="tabs" component={TabsCreen} />
    {/* <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    <Drawer.Screen name="AboutUs" component={AboutUsScreen} /> */}
  </Drawer.Navigator>
)




const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Home">
    <AuthStack.Screen name="MainPage" options={{ headerShown: false }} component={MainPage} />
    <AuthStack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
    <AuthStack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
    <AuthStack.Screen name="Menu" options={{ headerShown: true }} component={Menu} />



  </AuthStack.Navigator>
)

const HomeStackScreen = ({ navigation }) => (

  <HomeStack.Navigator>
    <HomeStack.Screen name="MainHome"
      options={{
        headerShown: true, title: 'Home s', headerTitleStyle: {
          color: 'white',
        }, headerStyle: { backgroundColor: '#3B7457', elevation: 0, shadowOpacity: 0, }
        , headerLeft: () => (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 18 }}
            onPress={() => navigation.openDrawer()}
          >
            <Icon
              // raised
              name='bars'
              type='font-awesome'
              color='white'
              iconStyle={{ fontSize: 25, fontWeight: 'normal' }}
              onPress={() => navigation.openDrawer()} />
          </TouchableOpacity>
        ),
      }}
      component={MainHome}
       />
    {/* <HomeStack.Screen name="TabScreentest" options={{ headerShown: true, title: 'Our Menu', headerStyle: { backgroundColor: '#fff', elevation: 0 } }} component={TabScreentest} /> */}
    {/* <AuthStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="CofeeDetails" options={{ headerShown: false }} component={CofeeDetails} />
    <HomeStack.Screen name="Menu" options={{ headerShown: true }} component={Menu} />
    <HomeStack.Screen name="PlaceOrder" options={{ headerShown: false }} component={PlaceOrder} />
    <HomeStack.Screen name="FirstPage" options={{ headerShown: false }} component={FirstPage} /> */}
    {/* <HomeStack.Screen name="Search" component={DrawerStackScreen} /> */}
  </HomeStack.Navigator>
)


const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="wherehouse" options={{ headerShown: true }} component={WhereHouse} />
  </SearchStack.Navigator>
);

const WherehouseScreen = ({ navigation }) => (
  <Wherehouse.Navigator>
    <Wherehouse.Screen name="wherehouse"

      options={{
        headerShown: true, title: 'Home A', headerTitleStyle: {
          color: 'white',
        }, headerStyle: { backgroundColor: '#3B7457', elevation: 0, shadowOpacity: 0, }
        , headerLeft: () => (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 18 }}

            onPress={() => navigation.openDrawer()}
          >
            <Icon
              // raised
              name='bars'
              type='font-awesome'
              color='white'
              iconStyle={{ fontSize: 25, fontWeight: 'normal' }}
            // onPress={() => navigation.openDrawer()}
            />
          </TouchableOpacity>
        ),
      }}

      component={WhereHouse} 
      />
  </Wherehouse.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />

  </ProfileStack.Navigator>
)
const AboutUsScreen = ({ navigation }) => (

  <AboutUss.Navigator>
    <AboutUss.Screen name="AboutUs"

      options={{
        headerShown: true, title: 'About Us', headerTitleStyle: {
          color: 'white',
        }, headerStyle: { backgroundColor: '#3B7457', elevation: 0, shadowOpacity: 0, }
        , headerLeft: () => (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 18 }}
            onPress={() => navigation.openDrawer()}

          >
            <Icon
              // raised
              name='bars'
              type='font-awesome'
              color='white'
              iconStyle={{ fontSize: 25, fontWeight: 'normal' }}
            // onPress={() => navigation.openDrawer()} 
            />
          </TouchableOpacity>
        ),
      }}

      component={AboutUs} />
  </AboutUss.Navigator>
);

const TabsCreen = ({ navigation }) => (
  <Tabs.Navigator
    initialRouteName="wherehouse"
    activeColor="#3B7457"
    inactiveColor="#bdbdbd"
    barStyle={{ backgroundColor: 'white' }}
  >
    <Tabs.Screen

      options={{
        tabBarLabel: 'wherehouse',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      name="wherehouse" component={WherehouseScreen} />
    <Tabs.Screen
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
      name="Home" component={HomeStackScreen} />
    <Tabs.Screen
      options={{
        tabBarLabel: 'Homes',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      name="Profile" component={ProfileStackScreen} 
      onPress={() => navigation.openDrawer()}
      />
    <Tabs.Screen
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="credit-card" color={color} size={26} />
        ),
      }}
      name="Cart" component={Cart} />
    {/* <Tabs.Screen
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cart" color={color} size={26} />
        ),
      }}
      name="Cart" component={Cart} /> */}
  </Tabs.Navigator>
)

export default function App() {

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsCreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator> */}
      {/* <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Profile" component={ProfileStackScreen} />
      </Tabs.Navigator> */}
      {/* <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
      </AuthStack.Navigator> */}
      <StackApp.Navigator initialRouteName="SplashScreen" >
        <StackApp.Screen name="drawer" options={{ headerShown: false }} component={DrawerStackScreen} />
        <StackApp.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <StackApp.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
        <StackApp.Screen name="CofeeDetails" options={{ headerShown: false, title: 'Our Menu', headerStyle: { backgroundColor: '#fff', elevation: 0 } }} component={CofeeDetails} />
        <StackApp.Screen name="MainHome" options={{ headerShown: true }} component={MainHome} />
        <StackApp.Screen name="Home" options={{ headerShown: false }} component={TabsCreen} />
        <StackApp.Screen name="TabScreentest" options={{ headerShown: false }} component={MenuStackScreen} />
        <StackApp.Screen name="WhereHouse" options={{ headerShown: false }} component={WhereHouse} />
        <StackApp.Screen name="AboutUs" options={{ headerShown: false }} component={AboutUsScreen} />
        <StackApp.Screen name="AboutUsScreeen" options={{ headerShown: false }} component={AboutUsScreeen} />

      </StackApp.Navigator>
    </NavigationContainer>
  );
}