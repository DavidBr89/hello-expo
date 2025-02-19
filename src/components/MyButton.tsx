import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { PropsWithChildren } from "react";

interface MyButtonProps extends TouchableOpacityProps {}

const MyButton = (props: MyButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={{ backgroundColor: "#ddd", padding: 16, ...props.style }}>
      {props.children}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({});
