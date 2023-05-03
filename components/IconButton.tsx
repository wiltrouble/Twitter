import { View, Text } from 'react-native'
import { Entypo, EvilIcons } from "@expo/vector-icons";


type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: number | string;
}

const IconButton = ({icon, text}: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* icon */}
      <EvilIcons name={icon} size={22} color="gray" />
      {/* number */}
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </View>
  );
};

export default IconButton;
