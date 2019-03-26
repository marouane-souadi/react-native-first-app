import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginFormRedux from './components/LoginFormRedux';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import AppSelect from './components/AppSelect';
import LibraryList from './components/LibraryList';
import ProductList from './components/ProductList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar initial>
      
        <Scene key="selectContainer">
          <Scene
            key="select"
            component={AppSelect}
            title="Select Your App"
          />
        </Scene>

        <Scene key="employeeManager" hideNavBar>
          <Scene key="auth">
            <Scene
              key="login"
              component={LoginFormRedux}
              title="Please Login"
            />
          </Scene>
          <Scene key="employeeMain">
            <Scene
              key="employeeList"
              component={EmployeeList}
              title="Employee List"
              rightTitle="Add"
              onRight={()=>Actions.employeeCreate()}
            />
            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Employee Create"
            />
            <Scene
              key="employeeEdit"
              component={EmployeeEdit}
              title="Employee Edit"
            />
          </Scene>
        </Scene>
        
        <Scene key="libraryManager">
          <Scene
            key="libraryList"
            component={LibraryList}
            title="Library List"
          />
        </Scene>
        <Scene key="productsManager">
          <Scene
            key="productsList"
            component={ProductList}
            title="Products List"
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
