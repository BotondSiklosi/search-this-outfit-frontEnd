import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "../components/navbar/NavBar";
import {BrowserRouter as Router} from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

describe('NavBar', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Router>
                <NavBar />
            </Router>);
    });

    it('should render div.nav', function () {
        expect(wrapper.find('div.nav').length).toEqual(1);
    });

    it('should render title', function () {
        expect(wrapper.find('h4.title').length).toEqual(1);
    });

    it(`should render 5 <Link />'s`, function () {
        expect(wrapper.find('Link').length).toEqual(5);
    });

    it(`should render 7 <div />'s`, function () {
        expect(wrapper.find('div').length).toEqual(7);
    });

})