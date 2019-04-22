import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import names from 'classnames';
import './index.less';

// import Pagination from '../../../lib/pagination';
import Pagination from '../pagination';

const prefixCls = 'react-pc-ui-table';

class Index extends React.Component {
  static defaultProps = {
    columns: [],
    dataSource: [],
    pagination: false,
    // onChangePage: () => {},
    rowClassName: (record, index) => {}
  };

  static propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    pagination: PropTypes.oneOfType([
      PropTypes.bool ,
      PropTypes.object,
    ]),
    // onChangePage: PropTypes.func,
    rowClassName: PropTypes.func,
  };
  constructor(props) {
    super(props);
    let pagination = false;
    if ('pagination' in props && props.pagination) {
      pagination = props.pagination;
    }

    this.state = {
      pagination,
    }
  }
  componentWillReceiveProps(nextProps) {
    if ('pagination' in nextProps && nextProps.pagination ) {
      this.setState({
        pagination: nextProps.pagination,
      });
    }
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
    let { pagination } = this.props;
    // console.log("--pagination-child--", pagination);
    return (
        <div className={names(`${prefixCls}`)}>
          <table className={names(`${prefixCls}-main`)}>
            {this.renderHeader()}
            {this.renderBody()}
          </table>
          {
            !!pagination ? (<div className={names(`${prefixCls}-pager`)}>
              <Pagination {...pagination} />
            </div>) : ''
          }
        </div>
    );
  }
}

export default connect()(Index);

