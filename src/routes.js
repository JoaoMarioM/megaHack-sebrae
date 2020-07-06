import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faTicketAlt} from '@fortawesome/free-solid-svg-icons'

import Login from './pages/login'
import Register from './pages/register'

import Home from './pages/home'
import Voucher from './pages/voucher'
import Restaurant from './pages/restaurant'
import Profile from './pages/profile'
import MyVoucher from './pages/myVoucher'
import MyScheduling from './pages/myScheduling'
import Payments from './pages/payments'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Authentication(){
    return(
        <Stack.Navigator headerMode="none"
        initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="MyVoucher" component={MyVoucher} />
            <Stack.Screen name="MyScheduling" component={MyScheduling} />
            <Stack.Screen name="Payments" component={Payments} />
        </Stack.Navigator>
    )
}

function TabNavigator(){
    return(

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) =>{
                    let iconName

                    switch (route.name) {
                        case 'Home':                
                            iconName = <FontAwesomeIcon  icon={faHome} />
                            break;   
                        case 'Profile':                
                            iconName = <FontAwesomeIcon  icon={faUserAlt} />
                            break;                  
                        default:
                            iconName = <FontAwesomeIcon icon={faTicketAlt} />
                            break;
                    }
                
                return iconName
                }
            })}

            tabBarOptions={{
                activeTintColor: '#333',
                inactiveTintColor: '#777'
            }}
            
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Voucher" component={Voucher}/>
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
  
    )
}

function StackNavigation(){
    return(
        <Stack.Navigator headerMode="none"
        initialRouteName="Authentication">
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default function Route(){
    return(
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}