import './BookingHome.css';
import BookPage from './Book';
import { useState } from 'react';
import {app, db } from '../firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const BookingHome = () => {
  const [valid, setvalid] = useState(true)
  const [hide, sethide] = useState(true)
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const book_date = document.getElementById('book-date');
    const book_time = document.getElementById('book-time');
    const leave_date = document.getElementById('leave-date');
    const leave_time = document.getElementById('leave-time');

    if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value){
      alert('Please fill all the fields');
    } else {
      try {
        const docRef = await addDoc(collection(db, 'bookings'), {
          bookingdate: book_date.value,
          bookingtime: book_time.value,
          leave_date: leave_date.value,
          leave_time: leave_time.value
        });

        alert('Your booking has been made');

        const BookPageDiv = document.querySelector('.box');
        const container = document.querySelector('.container');

        setvalid(!valid + BookPageDiv.classList.add("show"));
        sethide(!hide + container.classList.add("hide"));

      } catch (e) {
        console.error('Error adding document: ', e);
        alert('There was an error processing your booking. Please try again later.');
      }
    }
  }
  return (
      <>
        <BookPage />
        <div className="container">
      <div className="content">
        <div className="text">Book Now</div>
        <div className="form2">
          <div className="txt">Date & Time you would like to Book PetSitters</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="txt">Date & Time you would like to leave PetSitters</div>
            <div className="inputData">
              <input type="date" name="" id="leave-date" />
            </div>
            <div className="inputData">
              <input type="time" name="" id="leave-time" />
            </div>
            <div className="book">
                <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </>
  );
};
export default BookingHome;