import React, {Component} from 'react';
import Row from '../common/layout/Row';
import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';
import ValueBox from '../common/widget/ValueBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSummary} from './dashboardActions';

class Dashboard extends Component{

      componentWillMount(){
            this.props.getSummary();
      }

      render(){

            const {credit, debt} = this.props.summary;

            return (
                  <div>
                        <ContentHeader title="Dashboard" small="Versão 1.0"/>
                        <Content>
                              <Row>
                                    <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos"/>
                                    <ValueBox cols="12 4" color="Red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos"/>
                                    <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor consolidado"/>
                              </Row>
                        </Content>
                  </div>
            )
      }
}

const mapStateToProps = state => ({ summary : state.dashboard.summary });

const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);