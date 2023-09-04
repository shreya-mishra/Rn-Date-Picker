import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(
    false
  );
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);

  const showFromDatePicker = () => {
    setFromDatePickerVisibility(true);
  };

  const showToDatePicker = () => {
    setToDatePickerVisibility(true);
  };

  const hideFromDatePicker = () => {
    setFromDatePickerVisibility(false);
  };

  const hideToDatePicker = () => {
    setToDatePickerVisibility(false);
  };

  const handleFromConfirm = (date) => {
    setFromDate(date);
    hideFromDatePicker();
  };

  const handleToConfirm = (date) => {
    setToDate(date);
    hideToDatePicker();
  };

  return (
    <View>
      <Button title="Select From Date" onPress={showFromDatePicker} />
      {fromDate && <Text>From Date: {fromDate.toISOString()}</Text>}

      <Button title="Select To Date" onPress={showToDatePicker} />
      {toDate && <Text>To Date: {toDate.toISOString()}</Text>}

      <DateTimePickerModal
        isVisible={isFromDatePickerVisible}
        mode="date"
        onConfirm={handleFromConfirm}
        onCancel={hideFromDatePicker}
      />

      <DateTimePickerModal
        isVisible={isToDatePickerVisible}
        mode="date"
        onConfirm={handleToConfirm}
        onCancel={hideToDatePicker}
      />
    </View>
  );
};

export default App;
