import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Irure laborum irure ullamco voluptate ullamco."
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Irure laborum irure ullamco voluptate ullamco."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Irure laborum irure ullamco voluptate ullamco."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Irure laborum irure ullamco voluptate ullamco."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
