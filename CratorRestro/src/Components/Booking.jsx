import React from 'react'
import '../assets/Booking.css'
const Booking = () => {
  return (
    <div className='myDiv'>
      <form className='myForm'>
        <h1 style={{textAlign:"center",marginBottom:"2rem"}}>Book Your Seat</h1>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input type="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Name'/>

    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">No. of Persons</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder='ex.1,3,5'/>
    </div>
    <div class="mb-3">
    <label class="form-label" for="exampledate1">Date of Booking</label>
      <input type="date" class="form-control" id="exampledate1"/>

    </div>
    <div class="mb-3">
    <label class="form-label" for="exampledate1">No of tables to book</label>
      <input type="number" class="form-control" id="exampledate1" placeholder='e.g. 1,2,3'/>

    </div>
    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">9:00Pm-10:00pm</label>
    <br/>
    <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
    <label class="form-check-label" for="exampleCheck2">10:00Pm-12:00pm</label>
    <br/>
    <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
    <label class="form-check-label" for="exampleCheck2">12:00Am-2:00Am</label>
  </div>

    <button type="button" class="btn btn-primary" onClick={()=>{alert("Seat Booked Successfully! Please download your ticked");}}>Book Now</button>
  </form></div>
  )
}

export default Booking