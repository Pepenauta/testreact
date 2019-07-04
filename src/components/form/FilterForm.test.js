import React from 'react';
import { FilterForm }  from './FilterForm';
import { shallow } from 'enzyme';

describe('FilterForm', () => {
  let filterForm;
  const handleSubmitMock = jest.fn();

  beforeEach(() => {
    filterForm = shallow(<FilterForm applyFilterAction={handleSubmitMock} />);
  });

  describe('component methods', () => {
    let instance;
    beforeEach(() => {
      instance = filterForm.instance();
    });

    describe('handleInput', () => {
      const event = {
        target: {
          name: 'namePlayer',
          value: 'Marcos Rojo'
        }
      };

      beforeEach(() => {
        instance.handleInput(event);
      });

      it('should update component state with event data', () => {
        expect(filterForm.state('namePlayer')).toEqual('Marcos Rojo');
      });
    });

    describe('handleSubmit', () => {
      const state = {
        namePlayer: 'Marcos Rojo',
        positionPlayer: 'Centre-Back',
        agePlayer: 25
      };

      beforeEach(() => {
        filterForm.setState(state);
        filterForm.instance().handleSubmit();
      });

      it('should update component state with event data', () => {
        expect(handleSubmitMock).toHaveBeenCalledTimes(1);
        expect(handleSubmitMock).toHaveBeenCalledWith(state);
      });
    });
    
  });
});
