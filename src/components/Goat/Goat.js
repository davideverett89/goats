import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
    alert(`You used ${goat.name}`);
  }

  render() {
    const { goat } = this.props;
    return (
        <div className="Goat col-3">
            <div className="card">
                <img className="card-img-top" src={goat.imgUrl} alt={goat.name} />
                <div className="card-body">
                    <h5 className="card-title">{goat.name}</h5>
                    <p className="card-text">Beard length: {goat.beardLength}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-dark" onClick={this.useGoatEvent}>Use This Goat!</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Goat;
