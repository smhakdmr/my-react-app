import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <img
        style={{ width: '99%', }}
        src={logo}
      />
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p></p>
        <NavItem>
          <NavLink tag={Link} to="/period-transactions">
            <p>- Dönem İşlemleri</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/commission-transactions"}>
            <p>- Komisyon İşlemleri</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/department-operations"}>
            <p>- Departman İşlemleri</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/edit-profile"}>
            <p>- Profil Düzenle</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/application-procedures"}>
            <p>- Başvuru İşlemleri</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/application-tracking"}>
            <p>- Başvuru Takip</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/announcement-processes"}>
            <p>- İlan İşlemleri</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/ad-request"}>
            <p>- İlan Talep</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/ad-tracking"}>
            <p>- İlan Takip</p>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
