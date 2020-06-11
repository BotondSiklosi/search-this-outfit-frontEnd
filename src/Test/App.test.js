import React from 'react';
import App from '../App';
import NavBar from "../components/navbar/NavBar";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it(`should render 3 <div/>'s`, () => {
        expect(wrapper.find('div').length).toEqual(3);
    });

    it(`should render a '<div className="App"/>'`, () => {
        expect(wrapper.find('div.App').length).toEqual(1);
    })

    it('should render a <NavBar /> component', () => {
        expect(wrapper.find('NavBar').length).toEqual(1);
    });

    it(`should render 4 <Route />'s`, () => {
        expect(wrapper.find('Route').length).toEqual(4);
    });

});