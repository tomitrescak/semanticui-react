import { compose } from "react-komposer";
import Semantic from "../i18n";

export const composer: any = (data: any, onData: any): any => {
  // inject translation function
  var d = {
    mid: "",
    text: ""
  };
  // we need to copy over the data as the original data is sealed
  for (var m in data) {
    d[m] = data[m];
  }
  if (d.mid) {
    d.text = Semantic.translate(data.mid, data.text);
  }
  onData(null, d);
  return null;
};

export default <T>(component: any): () => React.Component<T, {}> => compose(composer)(component);
