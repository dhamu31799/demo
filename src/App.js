import Sidebar from "./sidebar";
import Heder from "./Heder";
import Chartvalue from "./Chartvalue";
import Assignmetcard from "./Assignmetcard";
import Interviewcard from "./Interviewcard";
import Calender from "./Calender";
import JobDashboard from "./JobCard";
import Lists from "./lists";
import Layout2 from "./Layout2";
function App() {
  return (
    <div>
      <Heder />
      <Sidebar />\
      <div style={{ paddingTop: "50px", paddingLeft: "98px" }}>
        <Layout2 />
        <div>
          <h1>HR Employee</h1>
          <p>
            {" "}
            Enjoy your selecting potential candidates Tracking and Management
            System.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Chartvalue />
          </div>

          <div>
            <Assignmetcard />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Interviewcard />
          </div>
          <div>
            <Calender />
            <Lists />
          </div>
        </div>
      </div>
      {/* <div>
  <JobDashboard/>
</div> */}
    </div>
  );
}

export default App;
