import { compose } from "react-komposer";
import Semantic from "../i18n";

export const composer: any = (data: any, onData: any): any => {
  // inject translation function
  let d = {
    mid: "",
    hid: "",
    text: "",
    header: ""
  };
  // we need to copy over the data as the original data is sealed
  for (let m in data) {
    d[m] = data[m];
  }
  if (d.mid) {
    d.text = Semantic.translate(data.mid, data.text);
  }
  if (d.hid) {
    d.header = Semantic.translate(data.hid, data.header);
  }
  onData(null, d);
  return null;
};

export default <T>(component: any): () => React.Component<T, {}> => compose(composer)(component);
