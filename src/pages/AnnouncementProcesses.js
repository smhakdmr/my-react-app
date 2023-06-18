import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    CardHeader, Card, ListGroup, ListGroupItem
} from "reactstrap";
import CustomStore from "devextreme/data/custom_store";
import { Column, DataGrid } from "devextreme-react/data-grid";

const AnnouncementProcesses = () => {
    const [newAddModal, setNewAddModal] = useState({
        isOpen: false,
        update: false,
    });
    const [selectedItem, setSelectedItem] = useState(null);

    const getData = async function () {
        return fetch(`URL ADRES BURAYA YAZILACAK`, {
            // Varsa burada token'ı yolla, yoksa alttaki satırı silebilirsin
            // headers: { Authorization: `${token}` },
        })
            .then(response => response.json())
            .then(data => ({
                // Gelen datanın tipine göre burayı şekillendir.
                data: data.value,
                totalCount: data.count,
            }))
            .catch(() => {
                // throw new Error('Data Loading Error');
            });
    };

    const [customStore, setCustomStore] = useState(new CustomStore({

        load(loadOptions) {
            return getData();
        }
    }));

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <>
            <Card>
                <CardHeader>
                    Başvurular
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem>
                        <DataGrid
                            dataSource={customStore}
                            showBorders
                            remoteOperations
                            keyExpr={"id"}>
                            <Column
                                dataField="AdvertId"
                                caption="AdvertId"
                                alignment="left"
                                visible={false}
                            />
                            <Column
                                dataField="DepartmentName"
                                caption="Daire Başkanlığı"
                                alignment="left"
                            />
                            <Column
                                alignment="center"
                                cellRender={item => (
                                    <Button
                                        className="btn btn-info btn-sm"
                                        onClick={() => {
                                            setSelectedItem(item?.data);
                                            setNewAddModal({
                                                isOpen: true,
                                                update: true,
                                            });
                                        }}
                                    >
                                        Başvuruları Gör
                                    </Button>
                                )}
                            />
                        </DataGrid>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </>
    );
};

export default AnnouncementProcesses;
