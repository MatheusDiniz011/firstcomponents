import { View, Button } from "react-native";
import styles from "../styles/component_style";

export default function Component2() {
        btn = () => {
          alert("Eu sou o Corpo");
        };

  return (
    <View style={styles.body}>
     <Button onPress={btn} title="CORPO" />
    </View>
  );
}