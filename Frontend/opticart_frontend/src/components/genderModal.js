import React from "react"
import "../styles/genderModal.css"

const GenderModal = ({onGenderChange}) => {

    return (

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <div class="container ">
                        <div class="holder">
                            <form  class="customRadio customCheckbox m-0 p-0">
                                <div class="row mb-0">
                                    <div class="row justify-content-start">
                                        <div class="col-12">
                                            <div class="row"> <input type="radio" name="textEditor" id="Male" checked /> <label onClick={()=> onGenderChange("male") } for="Male">Male</label> </div>
                                            <div class="row"> <input type="radio" name="textEditor" id="Female" /> <label onClick={()=> onGenderChange("female") } for="Female">Female</label> </div>
                                            <div class="row"> <input type="radio" name="textEditor" id="unisex" /> <label onClick={()=> onGenderChange("unisex") } for="unisex">Unisex</label> </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button  type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GenderModal