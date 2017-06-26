// import React, { Component, PropTypes } from 'react';
// import { Container } from 'flux/utils';
// import TaskStores from './stores/TaskStores'

// class TaskContainer extends Component {
  

//  render() {
//     let content =
//       this.props.children &&
//       React.cloneElement(this.props.children, {
//           tasks: this.state.taskstores.tasks,
//           editID: this.state.taskstores.editID,
//           startID: this.state.taskstores.startID,
//       });

//    return content;
//   }
// }

// TaskContainer.getStores = () => [TaskStores];
// TaskContainer.calculateState = prevState => ({
//     taskstores: TaskStores.getState()
// });

// export default Container.create(TaskContainer);