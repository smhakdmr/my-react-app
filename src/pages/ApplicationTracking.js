import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Table,
    CardHeader, Card, ListGroup, ListGroupItem
} from "reactstrap";

const ApplicationTracking = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    console.log("deneme")
    return (
        <>
           <Card>
                <CardHeader>
                    Başvurularım
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem>
                        <Table
                        >
                            <thead>
                                <tr>
                                    <th>
                                        Daire Başkanlığı
                                    </th>
                                    <th>
                                        Durum
                                    </th>
                                    <th>
                                        İşlem
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Komisyon Lideri
                                    </th>
                                    <td>
                                        Devam Ediyor
                                    </td>
                                    <td>
                                        <Button color="danger">
                                            Sil
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Komisyon Lideri
                                    </th>
                                    <td>
                                        Devam Ediyor
                                    </td>
                                    <td>
                                        <Button color="danger">
                                            Sil
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Komisyon Lideri
                                    </th>
                                    <td>
                                        Devam Ediyor
                                    </td>
                                    <td>
                                        <Button color="danger">
                                            Sil
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </>
    );
};

export default ApplicationTracking;
