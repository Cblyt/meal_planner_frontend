import Layout from "./components/Layout/Layout";
import RecipePage from "./containers/RecipePage/RecipePage";
import CreateRecipePage from "./containers/CreateRecipePage/CreateRecipePage";
import Home from "./containers/HomePage/HomePage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/recipe">
                            <RecipePage />
                        </Route>
                        <Route path="/create-recipe">
                            <CreateRecipePage />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
};

export default App;
