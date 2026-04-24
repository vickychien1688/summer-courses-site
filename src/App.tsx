import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherCourse from "./pages/TeacherCourse";
import TeacherWeek from "./pages/TeacherWeek";
import TeacherDay from "./pages/TeacherDay";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/teacher" component={TeacherLogin} />
      <Route path="/teacher/dashboard" component={TeacherDashboard} />
      <Route path="/teacher/:courseId" component={TeacherCourse} />
      <Route path="/teacher/:courseId/w/:week" component={TeacherWeek} />
      <Route path="/teacher/:courseId/w/:week/d/:day" component={TeacherDay} />
      <Route component={NotFound} />
    </Switch>
  );
}
