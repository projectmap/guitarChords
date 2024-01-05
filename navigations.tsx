import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import ChordsShapes from './chordsShapes';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Chords Shapes" component={ChordsShapes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
