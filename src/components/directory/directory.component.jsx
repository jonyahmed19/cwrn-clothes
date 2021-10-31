import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from '../../redux/directory/directory.selectors.js'
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...OtherAttrs }) => (
          <MenuItem key={id} {...OtherAttrs} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
