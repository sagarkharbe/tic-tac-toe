import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faPlay from "@fortawesome/fontawesome-free-solid/faPlay";
import faSettings from "@fortawesome/fontawesome-free-solid/faCog";
import faQuestion from "@fortawesome/fontawesome-free-solid/faQuestionCircle";

import Settings from "../Settings/Settings";
import Help from "../Help/Help";

import "./Menu.scss";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Menu extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  settingsPopupHandler = () => {
    MySwal.fire({
      title: "Settings",
      html: <Settings />,
      footer: "Powered by sagarkharabe",
      confirmButtonText: "Done",
      onClose: () => {
        // Al cerrar redirige a / (home) para que no se muestre el popup Settings
        this.context.router.history.push("/");
      }
    });
  };

  helpPopupHandler = () => {
    MySwal.fire({
      title: "Help",
      html: <Help />,
      footer: (
        <p>
          Source{" "}
          <a href="https://es.wikipedia.org/wiki/Tres_en_línea">Wikipedia</a>{" "}
        </p>
      ),
      confirmButtonText: "Got It",
      onClose: () => {
        // Al cerrar redirige a / (home) para que no se muestre el popup Settings
        this.context.router.history.push("/");
      }
    });
  };

  render() {
    if (this.props.showSettingsPopup) {
      this.settingsPopupHandler();
    } else if (this.props.showHelpPopup) {
      this.helpPopupHandler();
    } else {
      MySwal.close();
    }
    return (
      <main className="menu-container component">
        <Link className="button skyblue round glass" to="/start">
          <FontAwesomeIcon icon={faPlay} size="5x" />
        </Link>

        <div className="buttons-container">
          <Link className="button pink round glass" to="/settings">
            <FontAwesomeIcon icon={faSettings} size="2x" />
          </Link>
          <Link className="button blue brackets" to={`/help`}>
            <FontAwesomeIcon icon={faQuestion} size="2x" />
          </Link>
        </div>
      </main>
    );
  }
}

export default Menu;
