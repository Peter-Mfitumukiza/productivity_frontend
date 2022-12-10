import React from 'react';
import { shallow } from 'enzyme';
import NoteApp from './NoteApp';

describe('NoteApp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NoteApp />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the correct title', () => {
    expect(wrapper.find('h1').text()).toBe('React Notes');
  });

  it('renders a form for adding notes', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('renders a list of notes', () => {
    wrapper.setState({ notes: [{ title: 'Note 1', body: 'This is the first note' }] });
    expect(wrapper.find('h3').text()).toBe('Note 1');
    expect(wrapper.find('p').text()).toBe('This is the first note');
  });

  it('adds a new note when the form is submitted', () => {
    wrapper.setState({ title: 'Note 2', body: 'This is the second note' });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('notes')).toHaveLength(1);
    expect(wrapper.state('notes')[0].title).toBe('Note 2');
    expect(wrapper.state('notes')[0].body).toBe('This is the second note');
  });

  it('removes a note when the delete button is clicked', () => {
    wrapper.setState({ notes: [{ title: 'Note 1', body: 'This is the first note' }] });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('notes')).toHaveLength(0);
  });
});
