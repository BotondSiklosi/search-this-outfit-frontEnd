import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../components/home/Home";

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    it('should render home-container', function () {
        expect(wrapper.find('div.home-container').length).toEqual(1);
    });

    it(`should render 2 <p/>'s`, function () {
        expect(wrapper.find('p').length).toEqual(2);
    });

    it('should render a title', function () {
        expect(wrapper.find('p.title').text()).toEqual("Welcome on Search This Outfit!");
    });

    it(`should render 2 <Link/>'s`, function () {
        expect(wrapper.find('Link').length).toEqual(2);
    });
})