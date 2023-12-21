import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Article from './components/Article';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Searchscreen from './screens/SearchScreen';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#0d1b2a',
      }}>
        <Tab.Screen name= 'Home' component={HomeScreen} options={{
          tabBarIcon: ()=><Octicons name="home" size={24} color="#219ebc" />
        }}/>
        <Tab.Screen name= 'Settings' component={Searchscreen} options={{
          tabBarIcon: ()=><MaterialCommunityIcons name="cloud-search-outline" size={24} color="#219ebc" />
        }}/>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
