import * as React from "react";
import {View, Text, Button} from 'react-native';


const AppButton = ({title, onPress}) => (
  <Button
    title={title + " (iOS)"}
    onPress={onPress}
  />
);

export default AppButton;
