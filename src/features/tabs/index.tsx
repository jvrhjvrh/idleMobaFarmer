import { Tabs } from 'antd';
import React from 'react';

const { TabPane }= Tabs;
const AllTabs = () : React.ReactElement => {
    return (
        <div>
            <Tabs defaultActiveKey="actions">
                <TabPane tab="Actions" key="actions">
                    <div>
                        actions
                    </div>
                </TabPane>
                <TabPane tab="Skill Tree" key="skillTree">
                    <div>
                        skill tree
                    </div>
                </TabPane>
                <TabPane tab="Shop" key="shop">
                    <div>
                        shop
                    </div>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default AllTabs;
