import React, {useState} from 'react';
import {
  ButtonFilter,
  ButtonFilterText,
  Container,
  ModalContent,
} from './styles';
import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';

import {Calendar, LocaleConfig} from 'react-native-calendars';
// import { ptBR } from './localeCalendar';
// Change calendar Language to Portuguese Brazil
// LocaleConfig.locales['pt-BR'] = ptBR;
// LocaleConfig.defaultLocale = 'pt-BR';

const CalendarModal = ({setVisible, handleFilter}) => {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState();

  const handleOnDayPress = date => {
    setDateNow(new Date(date.dateString));

    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#fff',
    };

    setMarkedDates(markedDay);
  };

  const handleFilterDate = () => {
    handleFilter(dateNow);
    setVisible();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>
      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#ff0000',
            selectDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#fff',
          }}
        />

        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filter</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
};

export default CalendarModal;
