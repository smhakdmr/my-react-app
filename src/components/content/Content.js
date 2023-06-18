import { ReactDOM, React } from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Topbar from "./TopBar";
import PeriodTransactions from "./../../pages/PeriodTransactions"
import AnnouncementProcesses from "./../../pages/AnnouncementProcesses"
import ApplicationProcedures from "./../../pages/ApplicationProcedures"
import ApplicationTracking from "./../../pages/ApplicationTracking"
import ComissionTransactions from "./../../pages/ComissionTransactions"
import DepartmentOperations from "./../../pages/DepartmentOperations"
import EditProfile from "./../../pages/EditProfile"
import AdRequest from "./../../pages/AdRequest"
import AdTracking from "./../../pages/AdTracking"

const Content = (sidebarIsOpen, toggleSidebar) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route exact path="/" component={() => "Hello"} />
          <Route path="/period-transactions" element={<PeriodTransactions />} />
          <Route  path="/commission-transactions" element={<ComissionTransactions />} />
          <Route  path="/department-operations" element={<DepartmentOperations />} />
          <Route  path="/edit-profile" element={<EditProfile />} />
          <Route  path="/application-procedures" element={<ApplicationProcedures />} />
          <Route  path="/application-tracking" element={<ApplicationTracking />} />
          <Route  path="/announcement-processes" element={<AnnouncementProcesses />} />
          <Route  path="/ad-request" element={<AdRequest />} />
          <Route  path="/ad-tracking" element={<AdTracking />} /> 
        </Routes>
    </Container>
  );
}

export default Content;
