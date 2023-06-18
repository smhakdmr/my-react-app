import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardHeader, ListGroup, ListGroupItem, Form, FormGroup, Label, Col, Input, Button } from "reactstrap";



const AdRequest = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    console.log("deneme")
    return (
        <>
            <Card className="col-6">
                <CardHeader>
                    İlan Talep
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem>
                        <Form>
                            <FormGroup row>
                                <Label
                                    for="studentNumber"
                                    sm={6}
                                >
                                    Talep Edilen Öğrenci Sayısı:
                                </Label>
                                <Col sm={4}>
                                    <Input
                                        id="studentNumber"
                                        type="number"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col className="col-4"><Button color="primary">Gönder</Button></Col>
                                <Col className="col-5"></Col>
                                <Col className="col-3"></Col>

                            </FormGroup>

                        </Form>

                    </ListGroupItem>
                </ListGroup>
            </Card>
        </>
    );
};

export default AdRequest;
