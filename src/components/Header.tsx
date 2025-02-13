import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
  title: string;
  semester?: 1 | 2;
}

// type HeaderProps = {
//   title: string;
//   semester?: 1 | 2;
// } & PropsWithChildren;

const Header = (props: HeaderProps): ReactNode => {
  const { title, semester } = props;

  return props.children;
};

export default Header;

const styles = StyleSheet.create({});
