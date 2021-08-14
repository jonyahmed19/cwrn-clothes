import React from "react";
import "./shop.component.scss";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop">
        <h1>Collections</h1>
        {this.state.collections.map(({ id, ...OtherAttrs }) => (
          <PreviewCollection key={id} {...OtherAttrs} />
        ))}
      </div>
    );
  }
}
export default Shop;
