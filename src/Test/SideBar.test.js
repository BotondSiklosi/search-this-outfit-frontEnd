import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SideBar from "../components/main_page/SideBar";
import {PictureProvider} from "../context/PictureContext";

Enzyme.configure({adapter: new Adapter()});

describe('Home', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <PictureProvider>
                <SideBar/>
            </PictureProvider>);
    });

    it('should render div.sidebar', function () {
        expect(wrapper.find('div.sidebar').length).toEqual(1);
    });

    it('should render <ul/>', function () {
        expect(wrapper.find('ul').length).toEqual(1);
    });

});