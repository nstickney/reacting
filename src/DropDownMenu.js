import React, { Component } from 'react';

class DropDownMenu extends Component {

    createLink(item) {

        if (item.dl) {
            return (
                <span>
                    <a class="dropdown-item" href={item.link} download>
                        {item.name}
                    </a>
                </span>
            )
        } else {
            return (
                <span>
                    <a class="dropdown-item" href={item.link}>
                        {item.name}
                    </a>
                </span>
            )
        }
    }

    render() {

    var btnClass = "btn btn-outline-dark border-0 dropdown-toggle m-0 p-2 w-100";

    return (
            <div className="dropdown">
                <button className={btnClass} id="cMenuBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.ddTitle}
                    </button>
                <div className="dropdown-menu" aria-labelledby="cMenuBtn">
                    {this.props.ddItems.map(this.createLink)}
                </div>
            </div>
    );

    }
}

export default DropDownMenu
