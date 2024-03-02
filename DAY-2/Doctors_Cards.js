import './Demo.css'

function Demo() {

    let usersArray = [
        { "id": 10, "Designation": "Heart Specialist", "first_name": "Sachin", "last_name": "Tendulkar", "avatar": "./images/sachin-tendulkar.jpg", "rating": 5 },
        { "id": 45, "Designation": "Psychologist", "first_name": "Rohit", "last_name": "Sharma", "avatar": "./images/rohit-sharma.jpg", "rating": 5 },
        { "id": 7, "Designation": "Neurosurgeon", "first_name": "MS", "last_name": "Dhoni", "avatar": "./images/ms-dhoni.jpg", "rating": 4 },
        { "id": 18, "Designation": "Heart Specialist", "first_name": "Virat", "last_name": "Kohli", "avatar": "./images/virat-kohli.jpg", "rating": 4 },
        { "id": 12, "Designation": "Psychologist", "first_name": "Yuvraj", "last_name": "Singh", "avatar": "./images/yuvraj-singh.jpg", "rating": 5 },
        { "id": 5, "Designation": "Neurosurgeon", "first_name": "Gautam", "last_name": "Gambhir", "avatar": "./images/gautam-gambhir.jpg", "rating": 4 },
        { "id": 99, "Designation": "Heart Specialist", "first_name": "Ravichandran", "last_name": "Ashwin", "avatar": "./images/ravichandran-ashwin.jpg", "rating": 3 },
        { "id": 93, "Designation": "Psychologist", "first_name": "Jasprit", "last_name": "Bumrah", "avatar": "./images/jasprit-bumrah.jpg", "rating": 4 },
    ];



    let resultsArray = usersArray.map((item) => {
        const arr = [];
        for (let i = 0; i < item.rating; i++) {
            arr.push(
                <>⭐</>
            );
        }

        return  <div className='card' >
            <img src={item.avatar} /> <br />
            <span>{item.first_name + " " + item.last_name}</span>  <br />
            <span className="designation">{item.Designation}</span>  <br />
            <span
                className="stars">{arr}</span><br></br><br></br>
            <span className="book"><button>Book Appointment</button></span>
        </div>;
    });


    return (
        <>
            <h3 style={{ color: "red", padding: "5px", textAlign: "center" }}>Assignment Reference Image</h3>
            <hr />

            <div className='container'><br></br>
            {resultsArray}
            </div>

        </>
    );
}

export default Demo;