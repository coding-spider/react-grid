import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import _ from "underscore";

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

  getPlaceHolder(col) {
    return typeof col.filter === "object" && col.filter.placeholder
      ? col.filter.placeholder
      : `Searchby ${col.name}`;
  }

  render() {
    let self = this;
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {self.state.columns.map(function(c, i) {
              return (
                <th key={c.name} scope="col">
                  {c.name}
                </th>
              );
            })}
          </tr>
          <tr>
            {self.state.columns.map(function(c, i) {
              if (c.filter) {
                return (
                  <th key={c.name} scope="col">
                    <div className="from-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder={self.getPlaceHolder(c)}
                      />
                    </div>
                  </th>
                );
              }
              return <th key={c.name} scope="col" />;
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
