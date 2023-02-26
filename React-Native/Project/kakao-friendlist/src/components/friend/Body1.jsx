import { View, Image, Text, StyleSheet } from "react-native";
import Margin from "./Margin";

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;

  const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
    },
    imgBox: {
        width: size, 
        height: size, 
        borderRadius: size * 0.4
    },
    textContainer: {
      justifyContent: "center", 
      marginLeft: 10
    },
    textName: {
      fontWeight: isMe ? "bold" : undefined,
      fontSize: isMe ? 16 : 14,
    },
    introductionText: {
      fontSize: isMe ? 12 : 10, 
      color: "gray",
    }
})
  

  return (
    <View style={styles.Container}>
      <Image
        source={{ uri }}
        style={styles.imgBox}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textName}>
          {name}
        </Text>

        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <Text style={styles.introductionText}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
