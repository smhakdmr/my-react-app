import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, AccordionBody, AccordionHeader, AccordionItem, Form, Label, Input, FormGroup, Col, UncontrolledAccordion, Row, Button } from "reactstrap";


const ComissionTransactions = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <>

            <Table
            >
                <thead>
                    <tr>
                        <th>
                            Ad Soyad
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Rol
                        </th>
                        <th>
                            Sil
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            Komisyon Lideri
                        </th>
                        <td>
                            komisyonLideri@gtu.edu.tr
                        </td>
                        <td>
                            Lider
                        </td>
                        <td>
                            - LOGO -
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Komisyon Lideri
                        </th>
                        <td>
                            komisyonLideri@gtu.edu.tr
                        </td>
                        <td>
                            Lider
                        </td>
                        <td>
                            - LOGO -
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Komisyon Lideri
                        </th>
                        <td>
                            komisyonLideri@gtu.edu.tr
                        </td>
                        <td>
                            Lider
                        </td>
                        <td>
                            - LOGO -
                        </td>
                    </tr>
                </tbody>
            </Table>
            <br />
            <br />
            <Row>
                <Col className="col-6">
                    <UncontrolledAccordion stayOpen>
                        <AccordionItem>
                            <AccordionHeader targetId="1">Üye Ekle</AccordionHeader>
                            <AccordionBody accordionId="1">
                                <Form>
                                    <FormGroup row>
                                        <Label
                                            for="userName"
                                            sm={3}
                                        >
                                            Kullanıcı Adı:
                                        </Label>
                                        <Col sm={3}>
                                            <Input
                                                id="userName"
                                            />
                                        </Col>
                                        <Label
                                            for="role"
                                            sm={3}
                                        >
                                            Rol:
                                        </Label>
                                        <Col sm={3}>
                                            <Input
                                                id="role"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={3}>
                                        <Button color="primary">
                                            Kaydet
                                        </Button>
                                        </Col>
                                    </FormGroup>

                                </Form>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </Col>
            </Row>


        </>
    );
};

export default ComissionTransactions;
