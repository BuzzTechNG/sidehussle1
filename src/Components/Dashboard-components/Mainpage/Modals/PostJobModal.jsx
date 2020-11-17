import React from 'react'
import { appLogic } from '../../../..'

function PostJobModal({title,desc,budget,action}) {
    return (
        <div
        class="modal fade modalframe"
        backdrop="static"
        id="modal-postjob-view"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered "
          style={{ border: 0, outline: 0, maxWidth:"450px" }}
        >
          <div class="modal-content modalbg" >
            <div class="modal-header modal-header-style " style={{ border: "none", }}>
              <h6 class="modal-title" id="ModalLabel">
               <i className="fa fa-sign-out"></i> Post Job
              </h6>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="line"></div>
            <div class="modal-body" >
                <div className="mx-auto">
                <div className="title2 my-2">{title}</div>
            <div className="subtitle1 my-2">{desc}</div>
            <div className="subtitle2 my-2">{appLogic.numberWithCommas(budget)}</div>

                </div>
            
            <div className="subtitle3 mt-5">You are about to post this job</div>
              </div>
              <div class="modal-footer" style={{ border: "none", }}>
              <button type="button" class="modal-close-btn" data-dismiss="modal">
                Close
              </button>
              <button
                data-dismiss="modal"
                type="button"
                class="modal-save-btn action-btn m-0"
                onClick={() => action()}
              >
                 Post Job
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PostJobModal
