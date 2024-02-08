
import { NativeModules } from 'react-native';
import RNTextDetector from "rn-text-detector";
import WrapLoading from './WrapLoading';
const { RNTextDetector } = NativeModules;
  

return (
    <SafeAreaView style={styles.container}>
     <View style={styles.content}>
      <Text style={styles.title}>RN OCR SAMPLE</Text>
     <View style={getSpace(20)}>
      <TouchableOpacity style={[styles.button, styles.shadow]}
      onPress={() => onPress("capture")}>
       <Text>Take Photo</Text>
      </TouchableOpacity>
     <View style={getSpace(20)}> 
      <TouchableOpacity
       style={[styles.button, styles.shadow]}
       onPress={() => onPress("library")}
      >
       <Text>Pick a Photo</Text>
      </TouchableOpacity>
     </View>
     <View style={getSpace(50)}>
      <WrapLoading loading={state.loading}>
       <View style={{ alignItems: "center" }}>
        <Image style={[styles.image, styles.shadow]}
         source={{ uri: state.image }} />
       </View> 
     {/* {!!state.textRecognition && 
      state.textRecognition.map(
       (item: { text: string }, i: number) => (
        <Text key={i} style={getSpace(10)}>
         {item.text}
        </Text>
       ))} */}
       </WrapLoading>
      </View>
     </View>
     {state.toast.isVisible &&
      ToastAndroid.showWithGravityAndOffset(
        state.toast.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      )}
     </View>
    </SafeAreaView>
  );

export default RNTextDetector;

