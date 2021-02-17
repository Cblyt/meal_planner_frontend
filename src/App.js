import Layout from "./components/Layout/Layout";
import RecipePage from "./containers/RecipePage/RecipePage";

const App = () => {
    return (
        <div>
            <Layout>
                <RecipePage />
            </Layout>
        </div>
    );
};

export default App;
