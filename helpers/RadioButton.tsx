import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RadioButtons = (props: any) => {
  const radioPress = () => {
    props.setChecked(props?.item?.id);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 5,
      }}
    >
      <TouchableOpacity style={{}} onPress={radioPress}>
        <View
          style={[
            {
              marginLeft: 12,
              marginBottom: 17,
              height: 25,
              width: 25,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "#009387",
              alignItems: "center",
              justifyContent: "center",
            },
            props.style,
          ]}
        >
          {props?.checked == props?.item?.id ? (
            <View
              style={{
                height: 13,
                width: 13,
                borderRadius: 7,
                backgroundColor: "#009387",
              }}
            />
          ) : null}
        </View>
      </TouchableOpacity>
      <Text
        style={{
          marginBottom: 15,
          marginLeft: 8,
          fontWeight: "500",
          fontSize: 15,
          color: "#05375a",
        }}
      >
        {props?.item?.label}
      </Text>
    </View>
  );
};

export default RadioButtons;
