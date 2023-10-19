import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
export function JSONView(data: Object) {
  return (
    <JsonView
      data={data}
      shouldExpandNode={allExpanded}
      style={defaultStyles}
    />
  );
}
