import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {mainStackParamList} from '../../App';
import {styles} from '../styles/globalStyles';

export type ScreenNavigationProps = NativeStackScreenProps<mainStackParamList>;

const Home = ({navigation}: ScreenNavigationProps) => {
  const [dataList, setDataList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setDataList(res);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomColor: '#d3d3d3',
          borderBottomWidth: 1,
        }}
      />
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            personId: item.id,
            message: 'coming from navigation',
          })
        }>
        <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.contatiner}>
      <Text style={styles.heading}>RN Dynamic Linking</Text>
      {loading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <FlatList
          data={dataList}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={itemSeparator}
        />
      )}
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Setting')}>
        <Text style={styles.btnText}>Go to setting screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
