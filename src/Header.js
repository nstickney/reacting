import React, { Component } from 'react';
import logo from './logo.svg';

var createClass = require('create-react-class')

class Header extends Component {
    render() {
        var AppLogo = createClass({
            render() {
                var imgSize = "64px"
                return (
                    <a class="navbar-brand font-weight-bold text-cosmic p-0" href="index.html">
                        <img className="align-middle d-inline-block mr-1 my-0 p-0 logorotate" height={imgSize} width={imgSize} src={logo} alt="React.js" />
                        <h4 className="d-inline-block">{this.props.apptitle}</h4>
                    </a>
                );
            }
        });

        var FollowButtons = createClass({
            render() {
                var imgSize = "24px";
                var classNames = "align-top m-2"
                var ghLink = "https://github.com/" + this.props.user;
                var tLink = "https://twitter.com/" + this.props.user;
                return (
                    <div className="nav p-0"> 
                        <a href={ghLink} alt="Follow {this.props.user}">
                            <img src="./img/github.ico" height={imgSize} width={imgSize} alt="GitHub" className={classNames} />
                        </a>
                        <a href={tLink} alt="Follow {this.props.user}">
                            <img src="./img/twitter.ico"  height={imgSize} width={imgSize} alt="Twitter" className={classNames} />
                        </a>
                    </div>
                )
            }
        })

        return (
            <div className="navbar bg-wool sticky-top text-cosmic px-5 py-0">
                <AppLogo {...this.props} />
                <FollowButtons user={this.props.author} />
            </div>
        );
    }
}

export default Header;
