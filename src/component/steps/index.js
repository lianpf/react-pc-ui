import React from 'react';
import PropTypes from 'prop-types';
import './index.less'
import names from 'classnames'

/**
 * 参数params
 * {
      current: 2, 当前active
      isFail: true, 是否失败
      items: [
        {
          text: '验证手机',
          date: 1
        },
        {
          text: '设置密码',
          date: 2
        },
        {
          text: '完成',
          date: 3
        }
      ]
   }
 * */


class ProgressDot extends React.Component{
  static defaultProps = {
    items: [],
    className: '',
  }

  static propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,

  }

  render(){
    const { items, current, isFail } = this.props.params;

    if(!items || !items.length ) return null

    return (
        <div className={`steps flexParent`} >
          {
            items.map( (item, index) => {
              return (
                  <div className={`step flexParent`} key={index}>
                    {
                      !(Number(current) === index && isFail) ? (
                          <div className={`flexParent`}>
                            <div className={`stepItem`}>
                              <div className={index > Number(current) ? `${`content`} ${`contentNoActive`}` : 'content'}>
                                {index + 1}
                              </div>
                              <div className={index > Number(current) ? `stepText stepTextNoActive` : `stepText`}>{item.text}</div>
                            </div>
                            {
                              index !== (items.length - 1) ?(
                                  <div className={`stepLine`}>
                                    <span className={index >= Number(current) ? `lineBorder lineBorderNoActive` : `lineBorder`}></span>
                                  </div>
                              ) : ''

                            }
                          </div>
                      ) : (
                          <div className={`flexParent`}>
                            <div className={`stepItem`}>
                              <div className={`content errorContent`}>
                                !
                              </div>
                              <div className={`stepText errorStepText`}>失败</div>
                            </div>
                          </div>
                      )
                    }

                  </div>
              )
            })
          }
        </div>

    );
  }
}


export default ProgressDot;
