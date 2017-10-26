import React, { Component } from 'react';
import DropDownMenu from './DropDownMenu.js';

class RecommendedReading extends Component {
    render() {

        var humans = [{
            name: "Holy Bible",
            link: "https://www.bible.com/versions/59-esv-english-standard-version"
        }, {
            name: "Marginal Revolution",
            link: "http://marginalrevolution.com/"
        }, {
            name: "Unsupervised Learning",
            link: "https://danielmiessler.com/podcast/"
        }];

        var leaders = [{
            name: "Rands In Repose",
            link: "http://randsinrepose.com/"
        }];

        var compsci = [{
            name: "Cosmos: The Universe of Algorithms and Data Structures",
            link: "https://github.com/OpenGenus/cosmos"
        }, {
            name: "Crash Course: Computer Science",
            link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo"
        }, {
            name: "Every Programmer Should Know",
            link: "https://github.com/mtdvio/every-programmer-should-know"
        }, {
            name: "The Imposter's Handbook",
            link: "https://bigmachine.io/products/the-imposters-handbook"
        }];

        var compsec = [{
            name: "Daniel Miessler",
            link: "https://danielmiessler.com/blog/"
        }, {
            name: "Krebs on Security",
            link: "https://krebsonsecurity.com/"
        }, {
            name: "Schneier on Security",
            link: "https://www.schneier.com/"
        }];

        var natsec = [{
            name: "The Angry Staff Officer",
            link: "https://angrystaffofficer.com/"
        }, {
            name: "KGS NightWatch",
            link: "https://www.kforcegov.com/products/nightwatch/nightwatchdetails/"
        }];

        return(
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">Recommended Reading</h6>
                <DropDownMenu ddTitle="Humanity" ddItems={humans} />
                <DropDownMenu ddTitle="Leadership" ddItems={leaders} />
                <DropDownMenu ddTitle="Computer Science" ddItems={compsci} />
                <DropDownMenu ddTitle="Computer Security" ddItems={compsec} />
                <DropDownMenu ddTitle="National Security" ddItems={natsec} />
            </div>
        )
    }
}

export default RecommendedReading;
