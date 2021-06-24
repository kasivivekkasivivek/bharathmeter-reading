import "./index.css";
import { Component } from "react";

class PageHeader extends Component {
  render() {
    const logoUrl =
      "https://play-lh.googleusercontent.com/Gaqfq4QotERnvp-cqvlXkbIswc5pxfvFoaXtoMm-lgr02SA6ahzkBVEujzNrI6RXPaGh";
    return (
      <div className="page-header">
        <div className="image-container">
          <img src={logoUrl} className="logo-image" alt="logo" />
        </div>
      </div>
    );
  }
}

export default PageHeader;
