import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import names from 'classnames';
import './index.less';

class Index extends React.Component {
  static defaultProps = {
    columns: [],
    dataSource: [],
    // pagination: false,
    // onChangePage: () => {},
    rowClassName: (record, index) => {}
  }

  static propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    // pagination: PropTypes.oneOfType([
    //   PropTypes.bool ,
    //   PropTypes.object,
    // ]),
    // onChangePage: PropTypes.func,
    rowClassName: PropTypes.func,
  }
  constructor(props) {
    super(props);
  }

  renderHeader(){
    let {
      columns
    } = this.props;
    return (
        <thead>
        <tr>
          {
            columns.map( (item, index) => (
                <th key={index}>{item.title}</th>
            ))
          }
        </tr>
        </thead>
    )
  }
  renderBody(){
    let {
      dataSource,
      columns,
      rowClassName
    } = this.props;
    return (
        <tbody>
        {
          dataSource.map( (record, rowIndex) => (
              <tr key={rowIndex} className={rowClassName(record, rowIndex)}>
                {
                  columns.map( (column, columnIndex) => {
                    let text = typeof column['dataIndex'] === 'undefined' ? '' : record[column['dataIndex']];
                    return <td key={`${rowIndex}-${columnIndex}`}>
                      {
                        typeof column.render === 'function' ?
                            column.render(text, record) : text
                      }
                    </td>
                  })
                }
              </tr>
          ))
        }
        </tbody>
    )
  }

  render() {
    return (
        <table className={names('table')}>
          {this.renderHeader()}
          {this.renderBody()}
        </table>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

