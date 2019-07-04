import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { applyFilterAction } from '../../actions/filterAction';
import { PLAYER_POSITIONS } from '../../constants';
import './styles.css';

export class FilterForm extends Component {
  state = {
    namePlayer: '',
    positionPlayer: '',
    agePlayer: ''
  };

  renderOption = position => {
    const { value } = position;

    return (
      <option value={value} key={value}>{value}</option>
    );
  }

  handleInput = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { namePlayer, positionPlayer, agePlayer } = this.state;
    this.props.applyFilterAction({ namePlayer, positionPlayer, agePlayer });
  }

  render() {
    const { namePlayer, positionPlayer, agePlayer } = this.state;

    return (
      <div className="columns grid-lg">
        <div className="column col-4">
          <input className="form-input" name='namePlayer' placeholder='Player Name' value={namePlayer} onChange={this.handleInput} />
        </div>
        <div className="column col-3">
          <div className="form-group">
            <select className='form-select' name='positionPlayer' value={positionPlayer} onChange={this.handleInput}>
              <option value="">Position</option>
              {PLAYER_POSITIONS.map(this.renderOption)}
            </select>
          </div>
        </div>
        <div className="column col-3">
          <input className="form-input" type="number" name='agePlayer' placeholder='Age' value={agePlayer} onChange={this.handleInput}
            min={18}
            max={40} />
        </div>
        <div className="column col-2">
          <button className="btn btn-success" onClick={this.handleSubmit}>Search</button>
        </div>
      </div>
    );
  }
}

FilterForm.propTypes = {
  applyFilterAction: func.isRequired
}

export default connect(null, { applyFilterAction })(FilterForm);
