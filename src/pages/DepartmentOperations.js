import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    AccordionBody, AccordionHeader, AccordionItem,
    Form, Label, Input, FormGroup, Col, UncontrolledAccordion, Button,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row
} from "reactstrap";

const DepartmentOperations = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <>
        <Row>
             <Label
                for="department"
                sm={3}
            >
                Departman:
            </Label>
            <Dropdown id="department" isOpen={dropdownOpen} toggle={toggle} direction="down">
                <DropdownToggle caret>Seçiniz...</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Row>
           
            <br />
            <br />
            <UncontrolledAccordion defaultOpen={['1', '2']} stayOpen className="col-6">
                <AccordionItem>
                    <AccordionHeader targetId="1">Mevcut Lider</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Form>
                            <FormGroup row>
                                <Label
                                    for="fullName"
                                    sm={3}
                                >
                                    Ad Soyad:
                                </Label>
                                <Col sm={6}>
                                    <Input
                                        id="fullName"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="emailAddress"
                                    sm={3}
                                >
                                    Email:
                                </Label>
                                <Col sm={6}>
                                    <Input
                                        id="emailAddress"
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Lider Seç</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <Form>
                            <FormGroup row>
                                <Label
                                    for="userName"
                                    sm={3}
                                >
                                    Kullanıcı Adı:
                                </Label>
                                <Col sm={6}>
                                    <Input
                                        id="userName"
                                    />
                                </Col>
                            </FormGroup>
                            <Button color="primary">
                                Seç
                            </Button>
                        </Form>
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </>
    );
};

export default DepartmentOperations;
