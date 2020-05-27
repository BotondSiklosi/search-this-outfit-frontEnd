import React from 'react';
import App from '../App';
import NavBar from "../components/navbar/NavBar";
import MainPage from "../components/main_page/MainPage";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('App.js', () => {
    it('Render App correctly', () => {
        const component = shallow(<App />);

        expect(component).toMatchSnapshot();
    });
});

describe('NavBar.js', () => {
    it('Renders NavBar correctly', () => {
        const component = shallow(<NavBar/>);

        expect(component).toMatchSnapshot();
    });
});


describe('MainPage.js', () => {
    it('Renders MainPage correctly', () => {
        const component = shallow(<MainPage />);

        expect(component).toMatchSnapshot();
    });
});