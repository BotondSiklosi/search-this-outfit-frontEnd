import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom"

import NavBar from "../components/navbar/NavBar";

test('Renders NavBar correctly', () => {
    const {queryByTestId} = render(
        <Router>
            <NavBar/>
        </Router>);

    expect(queryByTestId("navbar")).toBeTruthy();
});