import React, { Component } from 'react';
import TodoItemBody from './TodoItemBody';
class TodoIndex extends Component {

   constructor(props) {
      super(props)

      this.state = {
         data: [],
         itemTitle: []
      }
   }



   render() {

      const addItem = () => {
         this.setState({ itemTitle:  });
         console.log(this.state);
      }

      return (
         <div>
            <div className="container">
               <div className="row">
                  <div className="col-3 mt-4">
                     <div className="card">
                        <div className="card-header">
                           <h4>Block adding...</h4>
                        </div>
                        <div className="card-body">
                           <input type="text" placeholder='Item Title' />
                        </div>
                        <div className="card-footer">
                           <button onClick={() => addItem()} className="btn btn-success btn-block">Add...</button>
                        </div>
                     </div>
                  </div>
                  <div className="col-9 mt-4">
                     <div className="row">
                        <TodoItemBody />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default TodoIndex;
