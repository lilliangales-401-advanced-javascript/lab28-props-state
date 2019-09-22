import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../components/Form';
import Message from '../components/message';


describe("<Form />", () => {
  it('Form is rendered on the DOM', () => {
    let app = shallow(<Form />);
    expect(app.find('input').exists()).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Form page="http://www.facebook.com">Facebook</Form>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Message />", () => {
  it('Form is rendered on the DOM', () => {
    let app = shallow(<Message />);
    expect(app.find('div').exists()).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Form page="http://www.facebook.com">Facebook</Form>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});