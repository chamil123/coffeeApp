import * as React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CofeeDetails, TabScreentest, Cart, TestScreen, MainHome, SplashScreen, SignIn, Home, Profile, Search, Details, Menu, PlaceOrder, FirstPage, MainPage, SignUp } from './src/componants'
import { CustomHeader } from './src';



const AuthStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
// const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const StackApp = createStackNavigator();
const MenuStack = createStackNavigator()
const Drawer = createDrawerNavigator();

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="TabScreentest" options={{ headerShown: true, title: 'Our Menu', headerStyle: { backgroundColor: '#fff', elevation: 0 } }} component={TabScreentest} />
  </MenuStack.Navigator>
);



const DrawerStackScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabsCreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
)




const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="MainPage" options={{ headerShown: false }} component={MainPage} />
    <AuthStack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
    <AuthStack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
    <AuthStack.Screen name="Menu" options={{ headerShown: true }} component={Menu} />

    <AuthStack.Screen name="CofeeDetails" options={{ headerShown: false, title: 'Our Menu', headerStyle: { backgroundColor: '#fff', elevation: 0 } }} component={CofeeDetails} />
    <AuthStack.Screen name="MainHome" options={{ headerShown: true }} component={MainHome} />
    <AuthStack.Screen name="Home" options={{ headerShown: false }} component={TabsCreen} />
    <AuthStack.Screen name="TabScreentest" options={{ headerShown: false }} component={MenuStackScreen} />

  </AuthStack.Navigator>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="MainHome" options={{
      headerShown: true, title: 'Home', headerTitleStyle: {
        color: 'white',
      }, headerStyle: { backgroundColor: '#009688', elevation: 0, shadowOpacity: 0, }
      , headerLeft: () => (
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 18 }}
          onPress={() => this.props.navigation.openDrawer()}
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
    }} component={MainHome} />
    {/* <HomeStack.Screen name="TabScreentest" options={{ headerShown: true, title: 'Our Menu', headerStyle: { backgroundColor: '#fff', elevation: 0 } }} component={TabScreentest} /> */}
    {/* <AuthStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="CofeeDetails" options={{ headerShown: false }} component={CofeeDetails} />
    <HomeStack.Screen name="Menu" options={{ headerShown: true }} component={Menu} />
    <HomeStack.Screen name="PlaceOrder" options={{ headerShown: false }} component={PlaceOrder} />
    <HomeStack.Screen name="FirstPage" options={{ headerShown: false }} component={FirstPage} /> */}
    <HomeStack.Screen name="Search" component={DrawerStackScreen} />
  </HomeStack.Navigator>
)


const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
  </SearchStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />

  </ProfileStack.Navigator>
)
const TabsCreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    activeColor="#009688"
    inactiveColor="#bdbdbd"
    barStyle={{ backgroundColor: 'white' }}
  >
    <Tabs.Screen


      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;


      //       iconName = focused
      //         ? IMAGE.ICON_HOME
      //         : IMAGE.ICON_HOME_BLACK;

      //     // You can return any component that you like here!
      //     return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" />;
      //   },
      // })}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      name="Home" component={HomeStackScreen} />
    <Tabs.Screen
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
      name="Search" component={SearchStackScreen} />
    <Tabs.Screen
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      name="Profile" component={ProfileStackScreen} />
    <Tabs.Screen
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cart" color={color} size={26} />
        ),
      }}
      name="Cart" component={Cart} />
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
        <StackApp.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <StackApp.Screen name="SignIn" options={{ headerShown: false }} component={AuthStackScreen} />

      </StackApp.Navigator>
    </NavigationContainer>
  );
}