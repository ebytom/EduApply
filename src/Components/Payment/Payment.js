import React, { useContext, useState } from 'react'
import { UserContext } from '../../App'

const Payment = ({ details, setOpen, application, paymentStatus }) => {

    const { user } = useContext(UserContext)

    const [upiSelected, setupiSelected] = useState(false)

    const [address, setaddress] = useState(null)


    const payment = (mode) => {

        const data = {
            "school": details,
            "course": application,
            "paymentMode": upiSelected ? "UPI" : "Card Payment",
            "user": user,
            "timeStamp": new Date().getTime()
        };

        // Step 1: Retrieve existing data from localStorage
        const existingData = localStorage.getItem("applications");

        let applications = [];

        if (existingData) {
            applications = JSON.parse(existingData);
        }

        // Step 2: Add the new data to the array
        applications.push(data);

        // Step 3: Set the modified data back in localStorage
        localStorage.setItem("applications", JSON.stringify(applications));

        paymentStatus(true);
    };


    return (
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="text-right">
                        <i class="fa fa-close close" data-dismiss="modal"></i>
                    </div> <div class="tabs mt-3">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <div onClick={() => setupiSelected(false)} class={upiSelected ? "nav-link btn" : "nav-link bg-primary active btn"} id="visa-tab" data-toggle="tab" role="tab" aria-controls="visa" aria-selected="true">
                                    <img src="https://i.imgur.com/sB4jftM.png" width="80" />
                                </div> </li> <li class="nav-item" role="presentation">
                                <div onClick={() => setupiSelected(true)} class={upiSelected ? "nav-link bg-primary active btn" : "nav-link btn"} id="paypal-tab" data-toggle="tab" role="tab" aria-controls="paypal" aria-selected="false">
                                    <img src="https://i.imgur.com/yK7EDD1.png" width="80" />
                                </div>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            {
                                upiSelected ?
                                    <div id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                                        <div class="px-5 mt-5"> <div class="inputbox">
                                            <span>UPI Id</span>
                                            <input type="text" name="name" class="form-control" required="required" />
                                        </div>
                                            <div class="d-flex justify-content-center my-3">
                                                <button class="btn btn-primary btn-block px-5" onClick={() => payment('UPI Payment')}>Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div class="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                                        <div class="mt-4 mx-4"> <div class="text-center">
                                            <h5>Card Payment</h5>
                                        </div> <div class="form mt-3"> <div class="inputbox">
                                            <span>Cardholder Name</span>
                                            <input type="text" name="name" class="form-control" required="required" />
                                        </div>
                                                <div class="inputbox">
                                                    <span>Card Number</span>
                                                    <input type="text" name="name" min="1" max="999" class="form-control" required="required" />
                                                    <i class="fa fa-eye"></i>
                                                </div>
                                                <div class="d-flex flex-row gap-3">
                                                    <div class="inputbox">
                                                        <span>Expiration Date</span>
                                                        <input type="text" name="name" min="1" max="999" class="form-control" required="required" />
                                                    </div>
                                                    <div class="inputbox">
                                                        <span>CVV</span>
                                                        <input type="text" name="name" min="1" max="999" class="form-control" required="required" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div class="inputbox">
                                                    <span>Delivery Address</span>
                                                    <input onChange={(e) => setaddress(e.target.value)} type="text" name="name" min="1" max="999" class="form-control" required="required" />
                                                    <i class="fa fa-eye"></i>
                                                </div>
                                                <div class="d-flex justify-content-center my-2">
                                                    <div class="bg-success text-white btn btn-success px-5" onClick={() => payment('Card Payment')}>Pay Now</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment