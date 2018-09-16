import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class ReactGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      columns: props.columns
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      columns: nextProps.columns
    });
  }

  render() {
    let self = this;
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {self.state.columns.map(function(c) {
              return (
                <th key={c.name} scope="col">
                  {c.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {self.state.data.map(function(r) {
            return (
              <tr key={r.id}>
                {self.state.columns.map(function(c) {
                  return <td key={c.dataKey}>{r[c.dataKey]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ReactGrid.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

ReactGrid.defaultProps = {
  data: [],
  columns: []
};

export default ReactGrid;
