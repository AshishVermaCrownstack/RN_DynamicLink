import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {styles} from '../styles/globalStyles';

const Detail = () => {
  const params = useRoute<any>().params;
  const {personId, message} = params;

  const [listItem, setListItem] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${personId}`)
      .then(res => res.json())
      .then(res => {
        setListItem(res);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <View>
          <Text style={{textAlign: 'center', fontSize: 24, marginVertical: 10}}>
            Hello {listItem.name}
          </Text>
          <View style={{paddingHorizontal: 20}}>
            <Text>Email : {listItem.email}</Text>
            <Text>Phone : {listItem.phone}</Text>
            <Text>Website : {listItem.website}</Text>
          </View>
          <Text style={styles.heading}>{message}</Text>
        </View>
      )}
    </View>
  );
};

export default Detail;
