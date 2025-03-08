import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function MainMenu() {
  // Estado para controlar la visibilidad de cada submenú (cada menú puede tener su propio estado)
  const [activeMenus, setActiveMenus] = useState({});

  // Función para manejar el mouse enter en un ítem de menú
  const handleMouseEnter = (menuId) => {
    setActiveMenus((prev) => ({
      ...prev,
      [menuId]: true, // Activamos el submenú correspondiente
    }));
  };

  // Función para manejar el mouse leave y cerrar un submenú
  const handleMouseLeave = (menuId) => {
    setActiveMenus((prev) => ({
      ...prev,
      [menuId]: false, // Cerramos el submenú correspondiente
    }));
  };

  return (
    <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
      <li
        className="visible_list"
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={() => handleMouseLeave("home")}
      >
        <a className="list-item" href="#">
          <span className="title">Home</span>
          <FaAngleDown />
        </a>
        <ul
          className="sub-menu"
          style={{
            display: activeMenus["home"] ? "block" : "none", // Mostrar submenú solo si está activo
          }}
        >
          <li><a href="index.html">Home V1</a></li>
          <li><a href="index2.html">Home V2</a></li>
          <li><a href="index3.html">Home V3</a></li>
          <li><a href="index4.html">Home V4</a></li>
          <li><a href="index5.html">Home V5</a></li>
        </ul>
      </li>

      <li
        className="visible_list"
      >
        <a className="list-item" href="#">
          <span className="title">Services</span>
    
        </a>
       
      </li>
      <li
        className="visible_list"
      >
        <a className="list-item" href="#">
          <span className="title">Freelancers</span>
    
        </a>
       
      </li>
      <li
        className="visible_list"
      >
        <a className="list-item" href="#">
          <span className="title">Projects</span>
    
        </a>
       
      </li>


      <li
        className="visible_list"
        onMouseEnter={() => handleMouseEnter("users")}
        onMouseLeave={() => handleMouseLeave("users")}
      >
        <a className="list-item" href="#">
          <span className="title">Users</span>
          <FaAngleDown />
        </a>
        <ul
          className="sub-menu"
          style={{
            display: activeMenus["users"] ? "block" : "none", // Mostrar submenú solo si está activo
          }}
        >
          <li
            onMouseEnter={() => handleMouseEnter("dashboard")}
            onMouseLeave={() => handleMouseLeave("dashboard")}
          >
            <a href="#">
              <span className="title">Dashboard</span>
              <FaAngleDown />
            </a>
            <ul
              className="sub-menu"
              style={{
                display: activeMenus["dashboard"] ? "block" : "none", // Submenú de "Dashboard"
              }}
            >
              <li><a href="page-dashboard.html">Dashboard</a></li>
              <li><a href="page-dashboard-proposal.html">Proposal</a></li>
            </ul>
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("employee")}
            onMouseLeave={() => handleMouseLeave("employee")}
          >
            <a href="#">
              <span className="title">Employee</span>
              <FaAngleDown />
            </a>
            <ul
              className="sub-menu"
              style={{
                display: activeMenus["employee"] ? "block" : "none", // Submenú de "Employee"
              }}
            >
              <li><a href="page-employee-v1.html">Employee V1</a></li>
              <li><a href="page-employee-v2.html">Employee V2</a></li>
            </ul>
          </li>
        </ul>
      </li>

      <li
        className="visible_list"
        onMouseEnter={() => handleMouseEnter("pages")}
        onMouseLeave={() => handleMouseLeave("pages")}
      >
        <a className="list-item" href="#">
          <span className="title">Pages</span>
          <FaAngleDown />
        </a>
        <ul
          className="sub-menu"
          style={{
            display: activeMenus["pages"] ? "block" : "none", // Mostrar submenú solo si está activo
          }}
        >
          <li
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <a href="#">
              <span className="title">About</span>
              <FaAngleDown />
            </a>
            <ul
              className="sub-menu"
              style={{
                display: activeMenus["about"] ? "block" : "none", // Submenú de "About"
              }}
            >
              <li><a href="page-about.html">About v1</a></li>
              <li><a href="page-about-v2.html">About v2</a></li>
            </ul>
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={() => handleMouseLeave("blog")}
          >
            <a href="#">
              <span className="title">Blog</span>
              <FaAngleDown />
            </a>
            <ul
              className="sub-menu"
              style={{
                display: activeMenus["blog"] ? "block" : "none", // Submenú de "Blog"
              }}
            >
              <li><a href="page-blog-v1.html">List V1</a></li>
              <li><a href="page-blog-v2.html">List V2</a></li>
            </ul>
          </li>
        </ul>
      </li>

      <li className="visible_list">
        <a className="list-item" href="page-contact.html">Contact</a>
      </li>
    </ul>
  );
}
