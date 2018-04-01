import * as React from "react";
import { withRouter } from "react-router";

class App extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }
}

export default withRouter(App);
