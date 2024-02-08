export interface TextDetectorBounding {
  width: number;
  height: number;
  left: number;
  top: number;

}

export interface TextDetectorResponse {
  text: string;
  bounding: TextDetectorBounding;
}



declare class TextDetector {
  static detectFromUri(uri: string): Promise<TextDetectorResponse[]>;
}



const [state, setState] = useState<{
  loading: boolean;
  image: string | null;
  toast: { 
   message: string;
   isVisible: boolean;
  };
  textRecognition: [] | null; 
 }>({
  loading: false,
  image: null,
  textRecognition: null,
  toast: {
  message: "",
  isVisible: false,
  },
 });

function onPress(type: "capture" | "library") {
  setState({ ...state, loading: true });
  type === "capture"
   ? launchCamera({ mediaType: "image" }, onImageSelect)
   : launchImageLibrary({ mediaType: "image" }, onImageSelect);
 }
 async function onImageSelect(media: { assets: [{ uri: string }] }) {
  if (!media) {
   setState({ ...state, loading: false });
   return;
  }
  if (!!media && media.assets) {
   const file = media.assets[0].uri; 
   const textRecognition = await RNTextDetector.detectFromUri(file);
   const INFLIGHT_IT = "Inflight IT";
   //if match toast will appear 
   const matchText = textRecognition.findIndex((item: { text: string      
   }) => item.text.match(INFLIGHT_IT));
   setState({
    ...state,
    textRecognition,
    image: file,
    toast: {
    message: matchText > -1 ? "Ohhh i love this company!!" : "",
    isVisible: matchText > -1, 
    },
    loading: false,
   });
 }}

 function onPress(type: "capture" | "library") {
  setState({ ...state, loading: true });
  type === "capture"
   ? launchCamera({ mediaType: "image" }, onImageSelect)
   : launchImageLibrary({ mediaType: "image" }, onImageSelect);
 }
 async function onImageSelect(media: { assets: [{ uri: string }] }) {
  if (!media) {
   setState({ ...state, loading: false });
   return;
  }
  if (!!media && media.assets) {
   const file = media.assets[0].uri; 
   const textRecognition = await RNTextDetector.detectFromUri(file);
   const INFLIGHT_IT = "Inflight IT";
   //if match toast will appear 
   const matchText = textRecognition.findIndex((item: { text: string      
   }) => item.text.match(INFLIGHT_IT));
   setState({
    ...state,
    textRecognition,
    image: file,
    toast: {
    message: matchText > -1 ? "Ohhh i love this company!!" : "",
    isVisible: matchText > -1, 
    },
    loading: false,
   });
 }}


export default TextDetector;
