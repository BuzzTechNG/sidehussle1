import React from 'react'

function LogoutModal({action}) {
    return (
        <div
      class="modal fade modalframe"
      backdrop="static"
      id="modal-logout-view"
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
             <i className="fa fa-sign-out"></i> Sign Out
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
          <div class="modal-body " >
            <div>You are about to sign out</div>
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
               Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LogoutModal
