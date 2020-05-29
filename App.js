import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/squareScreen';
import TextScreen from './src/screens/TextScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListScreen,
    Image: ImageScreen,
    Counter:CounterScreen,
    Color: ColorScreen,
    Sqaure:SquareScreen,
    TextScreen: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Header"
    }
  }
);

export default createAppContainer(navigator);
