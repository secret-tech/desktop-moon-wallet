import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const INC = 'app/authWrapper/INC';
export const DEC = 'app/authWrapper/DEC';

export const inc = createAction(INC);
export const dec = createAction(DEC);


const initialState = from({
  value: 0
});

export default createReducer({
  [INC]: (state) => (
    state.merge({
      value: state.value + 1
    })
  ),

  [DEC]: (state) => (
    state.merge({
      value: state.value - 1
    })
  )
}, initialState);
