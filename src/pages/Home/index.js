import * as React from "react";
import { Link } from "react-router-dom";

export default class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Home page</h1>

                <Link to="/create-test">
                    Create test now!
                </Link>
            </div>
        );
    }
}
