import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

const ResetCode = () => {
  return (
    <View>
      <Input placeholder="Kodu giriniz" />
      <Button title="Gönder"></Button>
    </View>
  );
};

const ForgottenPassword = () => {
  return (
    <View style={}>
      <Text>Mail adresiniz sisteme kayıtlı ise, 6 haneli kod gelicektir.</Text>
      <Input placeholder="Mail Adresiniz" />
      <Button title="Gönder" />
    </View>
  );
};
export default ForgottenPassword;

const styles = StyleSheet.create({});
