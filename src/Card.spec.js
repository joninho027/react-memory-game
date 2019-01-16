import React from 'react'
import Card from './Card'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'


describe( '<Card />', () => {
  it('renders without crashing', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
        <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    );
    wrapper.simulate('Click');
    expect(onClick).to.have.been.calledWith(0);
  })

  it('should match its reference snapshot', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
        <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    );

    expect(wrapper).to.matchSnapshot()
  })

});