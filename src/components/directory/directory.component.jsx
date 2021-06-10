import React, { useContext } from "react";
import "./directory.styles.scss";

//Components
import MenuItem from "../menu-item/menu-item.component";
import DirectoryContext from "../../context/directory/directory.context";

const Directory = () => {
  const directory = useContext(DirectoryContext);
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
