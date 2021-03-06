import React, { Component } from "react";
import Style from "./MovieElement.module.scss";

export default class MovieElement extends Component {
  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };
  // Le tag render est obligatoire dans les class :
  render() {
    // On écoute ici l'évent onMouseEnter et on créer le nom de la fonction
    return (
      <div
        onMouseEnter={this.mouseEnter}
        className={"d-flex flex-row bg-light " + Style.container}
      >
        <img alt="film" src={this.props.movie.img} />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{this.props.movie.title}</h5>
          <hr className="w-100" />
          <p>{this.props.movie.details}</p>
        </div>
      </div>
    );
  }
}
