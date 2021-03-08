import React from 'react'

export const ModalSection = () => {
    return (
        <div className="container jumbotron jumb2 jumbotron-fluid jumbotron-image text-white shadow" >
                <div className="container text-center">
                    <br/>
                    <br/>
                    <h1 class="display-1">Our Mission</h1>
                    <p class="display-5">"My House shall be called a House of Worship for all nations"</p>
                    <br />

                    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop">
                    View Mission
                    </button>

                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    
                    <div class="modal-dialog text-dark">
                        <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="staticBackdropLabel">Our Mission</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div class="modal-body container text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default ModalSection;