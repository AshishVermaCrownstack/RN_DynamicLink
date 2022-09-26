import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Detail from './src/screens/Detail';
import Home from './src/screens/Home';
import Main from './src/screens/Main';
import Setting from './src/screens/Setting';

export type mainStackParamList = {
  Home: undefined;
  Detail: {
    personId: number;
    message: string;
  };
  Setting: undefined;
  Main: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<mainStackParamList>();
  const Linking = {
    prefixes: ['https://rndynamiclinkdemo.page.link/'],
    config: {
      screens: {
        Home: 'home',
        Detail: {
          path: 'detail/:personId/:message',
          parse: {
            personId: (v: string) => v,
            message: (m: string) => m,
          },
        },
        Setting: 'setting',
      },
    },
  };
  return (
    <NavigationContainer linking={Linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
