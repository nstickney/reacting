import React, { Component } from 'react';
import DropDownMenu from './DropDownMenu.js';

class JustForFun extends Component {
    render() {

        var garage = [{
            name: "Airbus H135",
            link: "http://www.airbus.com/helicopters/civil-helicopters/light-twin/h135.html"
        }, {
            name: "BMW F 800 GS Adventure",
            link: "http://www.bmwmotorcycles.com/us/en/bike/enduro/2012/f800gsa/f800gsa_overview.html"
        }, {
            name: "Ford GT",
            link: "https://www.ford.com/performance/gt/#configurator"
        }, {
            name: "Morgan Aero 8",
            link: "https://www.morgan-motor.co.uk/aero8/"
        }, {
            name: "Tesla Model 3 Long Range",
            link: "https://www.tesla.com/model3"
        }, {
            name: "Toyota Hilux Double Cab",
            link: "https://www.toyota-europe.com/new-cars/hilux"
        }]

        var discs = [{
            name: "Janos Starker — Bach's Six Suites for Cello Solo",
            link: "https://www.discogs.com/Johann-Sebastian-Bach-Janos-Starker-Suites-For-Unaccompanied-Cello-Complete/master/543419"
        }, {
            name: "Apocalyptica — Cult",
            link: "https://www.discogs.com/Apocalyptica-Cult/master/28492"
        }, {
            name: "Metallica — S&M",
            link: "https://www.discogs.com/Metallica-With-Michael-Kamen-Conducting-The-San-Francisco-Symphony-Orchestra-SM/master/8928"
        }, {
            name: "Les Misérables (Original London Cast Recording)",
            link: "https://www.discogs.com/Alain-Boublil-And-Claude-Michel-Sch%C3%B6nberg-Les-Mis%C3%A9rables/master/370558"
        }, {
            name: "Jars of Clay — The Essential Jars of Clay",
            link: "https://www.discogs.com/Jars-Of-Clay-The-Essential-Jars-Of-Clay/release/7181216"
        }, {
            name: "John Williams — Star Wars: The Ultimate Soundtrack Collection",
            link: "https://www.discogs.com/John-Williams-Star-Wars-The-Ultimate-Vinyl-Collection/master/943390"
        }, {
            name: "The Piano Guys — 2 (Deluxe Edition)",
            link: "https://www.discogs.com/The-Piano-Guys-2/release/8566527"
        }, {
            name: "John Powell — How To Train Your Dragon",
            link: "https://www.discogs.com/John-Powell-How-To-Train-Your-Dragon/master/400112"
        }, {
            name: "The Complete Terry Pratchett",
            link: "http://www.isfdb.org/cgi-bin/ch.cgi?155"
        }, {
            name: "Cello",
            link: "https://en.wikipedia.org/wiki/Desert_Island_Discs"
        }]

        return(
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">Just For Fun</h6>
                <DropDownMenu ddTitle="Desert Island Discs" ddItems={discs} />
                <DropDownMenu ddTitle="Dream Garage" ddItems={garage} />
            </div>
        )
    }
}

export default JustForFun;
