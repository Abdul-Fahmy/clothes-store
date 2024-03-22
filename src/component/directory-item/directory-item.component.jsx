import { Link } from "react-router-dom";

import "./directory-item.style.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link className="body" to={`/shop/${title}`}>
        {/* <div className="body"> */}
        <h2>{title}</h2>
        <p>Shop Now</p>
        {/* </div> */}
      </Link>
    </div>
  );
};
export default DirectoryItem;
