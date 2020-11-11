import React, { Component } from "react";
import PropTypes from 'prop-types';

class List extends Component {

    static propTypes = {
        data: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
          })
        ).isRequired
      };

      render() {
        const { data } = this.props;
        return (
            <ul className="list list-group list-group-horizontal justify-content-center">
              {data.map((item) => (          
                <li class="list-group-item"  key={item.value}>{item.label}</li>
              ))}
            </ul>
        );
      }
}

export default List;