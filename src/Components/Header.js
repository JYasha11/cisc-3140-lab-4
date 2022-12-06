import "./Header.css"; // Tell webpack that Button.js uses these styles
import acorn from "../images/white_acorn.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="svgAndTitle">
        <div className="svg">
          <img src={acorn} alt="" className="img" />
        </div>
        <div className="title">
          <h2>Squirrel Data</h2>
        </div>
      </div>
      <div className="addSquirrel">
        <h2>+Add Squirrel</h2>
      </div>
    </div>
  );
}
