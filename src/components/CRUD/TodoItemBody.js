import React, { Component } from 'react'

export default class TodoItemBody extends Component {
   render() {
      return (
         <div>
            <div className="col-4 mb-3">
               <div className="card">
                  <div className="card-header">
                     <p>Card Title</p>
                  </div>
                  <div className="card-body"></div>
                  <div className="card-footer">
                     <div className="input-group">
                        <input className='form-control' type="text" />
                        <div className="input-group-append">
                           <button className="btn btn-success">Add List</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
