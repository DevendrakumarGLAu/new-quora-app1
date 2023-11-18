import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import "../header/header.css";
import {
  ExpandMore,
  FeaturedPlayListOutlined,
  NotificationImportantOutlined,
} from "@material-ui/icons/";
import { PeopleAltOutlined } from "@material-ui/icons";
import { AssignmentTurnedInOutlined } from "@material-ui/icons/";
import { Avatar, Input } from "@material-ui/core";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);
  // for input
  const [inputUrl, setInputUrl] = useState("");

  

  return (
    <div className="header card">
      <nav
        class="navbar navbar-expand-lg sticky"
        style={{ backgroundColor: "##dee0e1;" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Quora
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <HomeIcon style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FeaturedPlayListOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <AssignmentTurnedInOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <PeopleAltOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NotificationImportantOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form class="d-flex justify-content-around">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "30px" }}
              />
              <button
                class="btn btn-sm btn-outline-secondary"
                type="button"
                style={{ height: "30px" }}
              >
                Search
              </button>

              <Avatar
                style={{ color: "#b92b27", marginLeft: "10px", height: "30px" }}
              />
              <button onClick={onOpenModal}
                class="btn btn-sm btn-outline-secondary"
                type="button"
                style={{ height: "30px", width: "180px", marginLeft: "30px" }}
              >
                Ask Question
              </button>
              <Modal open={isModalOpen} onClose={onCloseModal} center>
                <div className="modal_title">
                  <h5>Add Question</h5>
                  <h5>share link</h5>
                  
                </div>
                <div className="modal_info">
                    <Avatar className="avatar"/>
                    <div className="modal_scope">
                      <PeopleAltOutlined/>
                      <p>Public</p>
                      <ExpandMore/>
                    </div>
                </div>
                <div className="modal_Field">   
                  <Input type="text" placeholder='Start your question with "Why","How","What",etc'/>
                  <div style={{display:"flex", flexDirection:"column"}}>
                    <Input type="text" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} 
                    placeholder='optional: includes a links that gives context to your question'/>
                    {
                      inputUrl !== "" && <img src={inputUrl} alt="image"  style={{height:"40vh", objectFit:"contain"}}/>
                    }
                  </div>
                </div>
                <div className="modal_buttons fixed-bottom d-flex justify-content-end">

                  <button type="button" class="btn btn-danger mx-2" onClick={onCloseModal}>Cancel</button>
                  <button type="submit" class="btn btn-primary mx-2">Add question</button>
                </div>
              </Modal>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
