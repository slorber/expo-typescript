import * as React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native'

export interface ButtonProps {
  title: string
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

const AppButton = ({title, onPress}: ButtonProps) => (
  <Button
    title={title + " (iOS)"}
    onPress={onPress}
  />
);

export default AppButton;
