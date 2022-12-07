import * as React from "react";
//import { AiFillEdit } from 'react-icons/fa';
import update_svg from "../images/update_icon.svg";
import delete_svg from "../images/delete_icon.svg";
import "./DataLists.css";

function DataLists() {
    return (
        <React.Fragment>
            <div className="dbLists">
                <ul>
                    <li><input type="checkbox"/></li>
                    <li>Squirrel sighting ID</li>
                    <li>Color Key</li>
                    <li>Activity</li>
                    <li>Age</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Location ID</li>
                    <li>
                        <button>
                            <img className="img" src={update_svg} alt="Edit" />
                        </button>
                        <button>
                            <img className="img" src={delete_svg} alt="Delete" />
                        </button>
                    </li>
                </ul>
                <ul>
                    <li><input type="checkbox" /></li>
                    <li>Squirrel sighting ID</li>
                    <li>Color Key</li>
                    <li>Activity</li>
                    <li>Age</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Location ID</li>
                    <li>
                        <button>
                            <img className="img" src={update_svg} alt="Edit" />
                        </button>
                        <button>
                            <img className="img" src={delete_svg} alt="Delete" />
                        </button>
                    </li>
                </ul>
                <ul>
                    <li><input type="checkbox" /></li>
                    <li>Squirrel sighting ID</li>
                    <li>Color Key</li>
                    <li>Activity</li>
                    <li>Age</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Location ID</li>
                    <li>
                        <button>
                            <img className="img" src={update_svg} alt="Edit" />
                        </button>
                        <button>
                            <img className="img" src={delete_svg} alt="Delete" />
                        </button>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default DataLists;