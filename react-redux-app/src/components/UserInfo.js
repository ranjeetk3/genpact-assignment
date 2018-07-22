import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

import "./UserInfo.css";

class UserInfo extends Component {
    constructor(props) {
        super(props)
        let hrIds = [ {id:1}, {id:2}, {id:3}, {id:4}, {id:5} ];
        let hrEmpIds = hrIds.map((hrId) =>
                <option key={hrId.id}>{hrId.id}</option>
            );
        this.state = {
            departmentVal:hrEmpIds,
            userId:1,
        }

    }
        
    handleChange(e) {
        let deprtmnt = e.target.value;
        let hrIds = [ {id:1}, {id:2}, {id:3}, {id:4}, {id:5} ];
        let engIds =  [ {id:6}, {id:7}, {id:8}, {id:9}, {id:10} ];
        switch(deprtmnt) {
            case "HR":
            let hrEmpIds = hrIds.map((hrId) =>
                    <option key={hrId.id}>{hrId.id}</option>
                );
                this.setState({departmentVal:hrEmpIds});
            break;
            case "ENGINEERING":
            let engEmpIds = engIds.map((engId) =>
                    <option key={engId.id}>{engId.id}</option>
                );
                this.setState({departmentVal:engEmpIds});
            break;
            default:
                this.setState({departmentVal:null});
        }
    }

    getUserInfo(e) {
        let id = e.target.value;
        this.setState({ userId:id });
    }

    getAllDetails(id) {
        this.props.actions.userDetails(id)
    }
    
    clear(id) {
        // Todo for clear the value
    }
    render() {
        const { data } = this.props.userDetails;
        let departments = [ {name:"HR"}, {name:"ENGINEERING"} ]
        let departmentLists = departments.map((department) =>
                <option key={department.name}>{department.name}</option>
            );
        return (
            <div>
                <select onChange={(e)=>this.handleChange(e)}>
                    {departmentLists}
                </select>
                <select onChange={(e)=>this.getUserInfo(e)}>
                    {this.state.departmentVal}
                </select>
                <div className='get_details_button' onClick={() => this.getAllDetails(this.state.userId)}>GetDetails</div>
                <div className='clear_button' onClick={() => this.clear(this.state.userId)}>Clear</div>
                <div>{data ? 
                    <div>
                    <img
                        className="user_avatar"
                        src={data.avatar}
                        height="80"
                        width="80"
                        alt="avatar"
                    />
                    <div>{ data.id }</div>
                    <div>{ data.first_name + ' ' + data.last_name }</div>
                    </div>
                : null}
                </div>

            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        userDetails: state.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(userActions, dispatch)
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)