import * as React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native'

export interface ButtonProps {
  title: string
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

const AppButton = ({title, onPress}: ButtonProps) => (
  <Button
    title={title + " (Android)"}
    onPress={onPress}
  />
);

export default AppButton;
