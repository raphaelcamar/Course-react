import React, { Component } from 'react';
import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabContent from '../common/tab/TabContent';
import TabHeader from '../common/tab/TabHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTab, showTabs} from '../common/tab/TabActions'
import BillingCycleList from './BillingCycleList';

class BillingCycles extends Component{

      componentWillMount() {
            this.props.selectTab('tabList');
            this.props.showTabs('tabList', 'tabCreate');
      }

      render(){
            return(
                  <div>
                        <ContentHeader title="ciclo de pagamentos" small="Cadastro"/>
                        <Content>
                              <Tabs>
                                    <TabsHeader>
                                          <TabHeader label="Listar" icon="bars" target="tabList"></TabHeader>
                                          <TabHeader label="Incluir" icon="plus" target="tabCreate"></TabHeader>
                                          <TabHeader label="Alterar" icon="pencil" target="tabUpdate"></TabHeader>
                                          <TabHeader label="Excluir" icon="trash-o" target="tabDelete"></TabHeader>
                                    </TabsHeader>
                                    <TabsContent>
                                          <TabContent id="tabList">
                                                <BillingCycleList/>
                                          </TabContent>
                                          <TabContent id="tabCreate"><h1>Incluir</h1></TabContent>
                                          <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
                                          <TabContent id="tabDelete"><h1>Excluir</h1></TabContent>
                                    </TabsContent>
                              </Tabs>
                        </Content>
                  </div>
            )
      }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycles);