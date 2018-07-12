import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

const AppRouter = ( //path is optional attribute for route
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
