import "../index.css";
import { React } from "react";
import deleteIcon from '../images/delete_icon.svg'
import updateIcon from '../images/update_icon.svg'

export default function Header(props) {
  const squirrelRes = props.squirrels;

  return (
    <>
      {squirrelRes.map((squirrel) => {
        var date = new Date(squirrel.date);
        date = date.toDateString()
        return (
          <div className="dbLists">
            <ul className="dbListsUl">
              <li className="listItem">
                <input type="checkbox" />
              </li>
              <li className="listItem">{squirrel.age}</li>
              <li className="listItem">{squirrel.color_key}</li>
              <li className="listItem">{squirrel.activity}</li>
              <li className="listItem">{date}</li>
              <li className="listItem">{squirrel.time}</li>
              <li className="listItem">{squirrel.location_id}</li>
              <li className="listItem">{squirrel.squirrel_sighting_id}</li>
              <li>
                <button>
                  <img className="img" src={updateIcon} alt="Edit" />
                </button>
                <button>
                  <img className="img" src={deleteIcon} alt="Delete" />
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
