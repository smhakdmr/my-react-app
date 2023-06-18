import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Form, Label, Input, FormGroup, Col, UncontrolledAccordion, Button } from "reactstrap";

const PeriodTransactions = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);


    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <>
            <UncontrolledAccordion defaultOpen={[
                '1',
                '2'
            ]} stayOpen>
                <AccordionItem>
                    <AccordionHeader targetId="1">Dönem Ekle</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Form>
                            <strong>- Dönem </strong>
                            <FormGroup row>
                                <Label
                                    for="startYear"
                                    sm={2}
                                >
                                    Başlangıç Yılı:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="startYear"
                                        type="number"
                                    />
                                </Col>
                                <Label
                                    for="endYear"
                                    sm={2}
                                >
                                    Bitiş Yılı:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="endYear"
                                        type="number"
                                    />
                                </Col>
                                <Label
                                    for="period"
                                    sm={1}
                                >
                                    Dönem:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="period"
                                        type="number"
                                    />
                                </Col>
                            </FormGroup>
                            <strong>- Departman Öğrenci Talep </strong>
                            <FormGroup row>
                                <Label
                                    for="departmenStartDate"
                                    sm={2}
                                >
                                    Başlangıç:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="departmenStartDate"
                                        type="date"
                                    />
                                </Col>
                                <Label
                                    for="departmentEndDate"
                                    sm={2}
                                >
                                    Bitiş:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="departmentEndDate"
                                        type="date"
                                    />
                                </Col>
                            </FormGroup>
                            <strong>- Öğrenci İlan Başvuru </strong>
                            <FormGroup row>
                                <Label
                                    for="studentStartDate"
                                    sm={2}
                                >
                                    Başlangıç:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="studentStartDate"
                                        type="date"
                                    />
                                </Col>
                                <Label
                                    for="studentEndDate"
                                    sm={2}
                                >
                                    Bitiş:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="studentEndDate"
                                        type="date"
                                    />
                                </Col>
                            </FormGroup>
                            <strong>- Komisyon İlan Onay </strong>
                            <FormGroup row>
                                <Label
                                    for="comissionStartDate"
                                    sm={2}
                                >
                                    Başlangıç:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="comissionStartDate"
                                        type="date"
                                    />
                                </Col>
                                <Label
                                    for="comissionEndDate"
                                    sm={2}
                                >
                                    Bitiş:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="comissionEndDate"
                                        type="date"
                                    />
                                </Col>
                            </FormGroup>
                            <Button color="primary">
                                Kaydet
                            </Button>

                        </Form>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Dönem Bilgilerini Düzenle</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <Form>
                            <strong>- Dönem </strong>
                            <FormGroup row>
                                <Label
                                    for="editPeriod"
                                    sm={1}
                                >
                                    Dönem:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="editPeriod"
                                        type="number"
                                    />
                                </Col>
                            </FormGroup>
                            <strong>- Departman Öğrenci Talep </strong>
                            <FormGroup row>
                                <Label
                                    for="editDepartmenStartDate"
                                    sm={2}
                                >
                                    Başlangıç:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="editDepartmenStartDate"
                                        type="date"
                                    />
                                </Col>
                                <Label
                                    for="editDepartmentEndDate"
                                    sm={2}
                                >
                                    Bitiş:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="editDepartmentEndDate"
                                        type="date"
                                    />
                                </Col>
                            </FormGroup>
                            <strong>- Öğrenci İlan Başvuru </strong>
                            <FormGroup row>
                                <Label
                                    for="editStudentStartDate"
                                    sm={2}
                                >
                                    Başlangıç:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="editStudentStartDate"
                                        type="date"
                                    />
                                </Col>
                                <Label
                                    for="editStudentEndDate"
                                    sm={2}
                                >
                                    Bitiş:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="editStudentEndDate"
                                        type="date"
                                    />
                                </Col>
                            </FormGroup>
                            <strong>- Komisyon İlan Onay </strong>
                            <FormGroup row>
                                <Label
                                    for="editComissionStartDate"
                                    sm={2}
                                >
                                    Başlangıç:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="editComissionStartDate"
                                        type="date"
                                    />
                                </Col>
                                <Label
                                    for="editComissionEndDate"
                                    sm={2}
                                >
                                    Bitiş:
                                </Label>
                                <Col sm={2}>
                                    <Input
                                        id="editComissionEndDate"
                                        type="date"
                                    />
                                </Col>
                            </FormGroup>
                            <Button color="primary">
                                Kaydet
                            </Button>
                        </Form>
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </>
    );
};

export default PeriodTransactions;
