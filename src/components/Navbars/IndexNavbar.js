/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Modal,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  Container,
  Row,
  Col,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  UncontrolledTooltip,
  Card,
  CardHeader,
  CardBody,
  TabPane,
  TabContent,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [demoModal, setDemoModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Mining Pool </span>
            Farm
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            GPU & CPU Mining For Newcomers & Professionals
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  MiningPoolFarm
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/MiningPoolFarm"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://discord.gg/ZypfV3kkb6"
                rel="noopener noreferrer"
                target="_blank"
                title="Chat with us on Discord"
              >
                <i className="fab fa-discord" />
                <p className="d-lg-none d-xl-none">Discord</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://github.com/MiningPool-Farm"
                rel="noopener noreferrer"
                target="_blank"
                title="View our code on Github"
              >
                <i className="fab fa-github" />
                <p className="d-lg-none d-xl-none">Github</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="tim-icons icon-book-bookmark d-lg-none d-xl-none" />
                {/*Getting started*/}
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
              <DropdownItem href="/dashboard">
                  <i className="tim-icons icon-paper" />
                  Dashboard
                </DropdownItem>
                <DropdownItem href="/about">
                  <i className="tim-icons icon-paper" />
                  About
                </DropdownItem>
                <DropdownItem tag={Link} to="/terms-privacy">
                  <i className="tim-icons icon-image-02" />
                  Terms & Privacy
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <Modal
            isOpen={demoModal}
            toggle={() => setDemoModal(false)}
            modalClassName="modal-black"
            >
              <div className="modal-header justify-content-center">
                <button className="close" onClick={() => setDemoModal(false)}>
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Configure Worker</h4>
              </div>
              <div className="modal-body">
                <Col className="ml-auto mr-auto">
                  {/*<div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                      Select your Coin.
                    </small>
                  </div>*/}
                  <Card>
                    <CardHeader>
                      <Nav className="nav-tabs-info" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: iconTabs === 1,
                            })}
                            onClick={(e) => setIconsTabs(1)}
                            href="#pablo"
                          >
                            GPU
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: iconTabs === 2,
                            })}
                            onClick={(e) => setIconsTabs(2)}
                            href="#pablo"
                          >
                            CPU
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                    <CardBody>
                      <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                        <TabPane tabId="link1">
                          <p>
                            GPU If-Then form goes here
                          </p>
                        </TabPane>
                        <TabPane tabId="link2">
                          <p>
                            CPU If-Then form goes here
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </div>
              <div className="modal-footer">
                {/*<Button color="default" type="button">
                  Nice Button
                </Button>
                <Button
                  color="danger"
                  type="button"
                  onClick={() => setDemoModal(false)}
                >
                  Close
                </Button>*/}
              </div>
            </Modal>
            
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={() => setDemoModal(true)}
              >
                <i className="tim-icons icon-molecule-40" /> Configure
              </Button>
            </NavItem>

            <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h4 className="title title-up mb-0">Sign in</h4>
              </div>
            </div>
            <div className="modal-body">
              {/*<div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("../../assets/img/github.svg").default}
                  />
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("../../assets/img/google.svg").default}
                  />
                </Button>
              </div>*/}
              <div className="text-center text-muted mb-4 mt-3">
                <p>Need a Wallet? Click a coin below!<br />
                  GPU: 
                  <img alt="..." width={50} src={require("../../assets/img/erg.png")}/>
                  <img alt="..." width={50} src={require("../../assets/img/etc.png")}/>
                  <img alt="..." width={50} src={require("../../assets/img/firo.png")}/>
                  <img alt="..." width={50} src={require("../../assets/img/rvn.png")}/>
                  <br />
                  CPU: 
                  <img alt="..." width={50} src={require("../../assets/img/xmr.png")}/>
                  <img alt="..." width={50} src={require("../../assets/img/rtm.png")}/>
                </p>
              </div>
              <Form role="form">
                {/*<FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  </FormGroup>*/}
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-wallet-43" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Wallet Address"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Label check id="save">
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Save Address
                  </Label>
                  <UncontrolledPopover placement="right" target="save">
                  {/*<PopoverHeader>Popover on Right</PopoverHeader>*/}
                  <PopoverBody>
                    Saves this address to a local-only cookie, per our Privacy Policy.
                  </PopoverBody>
                </UncontrolledPopover>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                onClick={() => setFormModal(true)}
              >
                <i className="tim-icons icon-spaceship" /> Sign In
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
