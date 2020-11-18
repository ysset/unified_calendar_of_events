import React from "react";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const SingleDayEvents = () => {

    return(
        <>

        </>
    )
}
const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleDayEvents);
