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
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {this.state.columns.map(function(c) {
              return (
                <th key={c.name} scope="col">
                  {c.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(function(r) {
            return (
              <tr key={r.id}>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
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
