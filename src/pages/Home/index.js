import React, {useEffect, useState} from 'react';
import {Modal, Text, View} from 'react-native';
import {Area, Background, List, ListBalance, Title} from './style';
import Header from '../../components/Header';

import Material from 'react-native-vector-icons/MaterialIcons';

import {format} from 'date-fns';
import api from '../../services/api';

import {useIsFocused} from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HistoryList from '../../components/HistoryList';
import CalendarModal from '../../components/CalendarModal';

const Home = () => {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovement, setDateMovement] = useState(new Date());
  const [listMovements, setListMovements] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    const getMovement = async () => {
      let date = new Date(dateMovement);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy'); // Prevent Timezone Errors

      const receives = await api.get('receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('balance', {
        params: {
          date: dateFormated,
        },
      });
      if (isActive) {
        setListMovements(receives.data);
        setListBalance(balance.data);
      }

      return () => (isActive = false);
    };

    getMovement();
  }, [isFocused, dateMovement]);

  const handleDelete = async id => {
    try {
      await api.delete('receives/delete', {
        params: {
          item_id: id,
        },
      });

      setDateMovement(new Date());
    } catch (error) {
      console.log(error);
    }
  };

  const filterDateMovement = (dateSelected) => {
    setDateMovement(dateSelected);
  };

  return (
    <Background>
      <Header title="My account activity" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item}) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Material name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Recent Transactions</Title>
      </Area>

      <List
        data={listMovements}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <HistoryList data={item} deleteItem={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovement}
        />
      </Modal>
    </Background>
  );
};

export default Home;
