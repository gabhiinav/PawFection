import './Book.css'
import img1 from '../components/img1.jpg';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHYb7pj9L8gmv6HFu1eR-OOH7QMyspy9c",
  authDomain: "pawfection-f9f6e.firebaseapp.com",
  databaseURL: "https://pawfection-f9f6e-default-rtdb.firebaseio.com",
  projectId: "pawfection-f9f6e",
  storageBucket: "pawfection-f9f6e.appspot.com",
  messagingSenderId: "521662961796",
  appId: "1:521662961796:web:ed7085793e0a5f27070ad1",
  measurementId: "G-W1BMCL3SY3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Book = () => {
    let PetSitters = [
        {
            name: "PetSitter 1",
            price: "100",
            image: "https://images.unsplash.com/photo-1490011939715-f508e6815451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },

        {
            name: "PetSitter 2",
            price: "200",
            image: "https://images.unsplash.com/photo-1512984501745-db2433c19f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        },
        {
            name: "PetSitter 3",
            price: "300",
            image: "https://plus.unsplash.com/premium_photo-1664301168471-1e0d7ddebd3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];

    const bookPetSitter1 = (event) => {
        const imageTarget = document.querySelector('#targetImage');
        const nameTarget = document.querySelector('#targetName');
        const priceTarget = document.querySelector('#targetPrice');
        const cards = document.querySelector('.cards_box');
        const request = document.querySelector('.request');
    
        imageTarget.src = PetSitters[0].image;
        nameTarget.innerHTML = PetSitters[0].name;
        priceTarget.innerHTML = '$' + PetSitters[0].price;
        cards.style.display = 'none';
        request.style.display = 'block';
    
        addDoc(collection(db, 'booking'), {
          PetSitterImage: PetSitters[0].image,
          PetSitterName: PetSitters[0].name,
          PetSitterPrice: '$' + PetSitters[0].price,
        });
      };
      
    const bookPetSitter2 = (event) => {
        const imageTarget = document.querySelector('#targetImage');
        const nameTarget = document.querySelector('#targetName');
        const priceTarget = document.querySelector('#targetPrice');
        const cards = document.querySelector('.cards_box');
        const request = document.querySelector('.request');
    
        imageTarget.src = PetSitters[1].image;
        nameTarget.innerHTML = PetSitters[1].name;
        priceTarget.innerHTML = '$' + PetSitters[1].price;
        cards.style.display = 'none';
        request.style.display = 'block';
    
        addDoc(collection(db, 'booking'), {
          PetSitterImage: PetSitters[1].image,
          PetSitterName: PetSitters[1].name,
          PetSitterPrice: '$' + PetSitters[1].price,
        });
      };

    const bookPetSitter3 = (event) => {
        const imageTarget = document.querySelector('#targetImage');
        const nameTarget = document.querySelector('#targetName');
        const priceTarget = document.querySelector('#targetPrice');
        const cards = document.querySelector('.cards_box');
        const request = document.querySelector('.request');
    
        imageTarget.src = PetSitters[2].image;
        nameTarget.innerHTML = PetSitters[2].name;
        priceTarget.innerHTML = '$' + PetSitters[2].price;
        cards.style.display = 'none';
        request.style.display = 'block';
    
        addDoc(collection(db, 'booking'), {
          PetSitterImage: PetSitters[2].image,
          PetSitterName: PetSitters[2].name,
          PetSitterPrice: '$' + PetSitters[2].price,
        });
      };
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    };
    return (
        <div className="box">
            <div className="content">
                <div className="text">Find nearest Pet Sitter</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                         <div className="pet_sitter_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookPetSitter1}>
                            <img src={PetSitters[0].image} alt="PetSitter1" />
                            <div className="pet_sitter_name">{PetSitters[0].name}</div>
                            <div className="price">{'$' + PetSitters[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookPetSitter2}>
                            <img src={PetSitters[1].image} alt="PetSitter2" />
                            <div className="pet_sitter_name">{PetSitters[1].name}</div>
                            <div className="price">{'$' + PetSitters[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookPetSitter3}>
                            <img src={PetSitters[2].image} alt="PetSitter3" />
                            <div className="pet_sitter_name">{PetSitters[2].name}</div>
                            <div className="price">{'$' + PetSitters[2].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;