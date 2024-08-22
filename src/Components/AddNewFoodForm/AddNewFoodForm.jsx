import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNewFoodForm() {
    function handleCheckboxChange(e) {
        setNewFood({ ...newFood, [e.target.id]: e.target.checked });
      }
    
  const [hoverRating, setHoverRating] = useState(0);

  const plateImages = [
    "https://t3.ftcdn.net/jpg/03/06/75/66/360_F_306756617_moZMl2JAPW5rwxj8TBggViHvKtX1QDK2.jpg",
    "https://www.shutterstock.com/image-vector/hands-holding-fork-spoon-empty-260nw-1292484178.jpg",
  ];

  const API = import.meta.env.VITE_KEY_URL;
  let navigate = useNavigate();
  const [newFood, setNewFood] = useState({
    food_name: ``,
    restaurant_name: "",
    rating: "",
    seconds: "",
    restaurant_img: "",
    food_img: "",
    notification: null,
  });
  function handleTextChange(e) {
    setNewFood({ ...newFood, [e.target.id]: e.target.value });
  }
  function addFood() {
    fetch(`${API}/food`, {
      method: "POST",
      body: JSON.stringify(newFood),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(navigate("/food"))
      .catch((error) => console.error("catch", error));
  }
  function handleSubmit(e) {
    e.preventDefault();
    addFood();
    console.log(newFood);
  }
  function handleNotificationToggle(weeks) {
    const notificationDate = new Date(Date.now() + weeks * 7 * 24 * 60 * 60 * 1000).getTime();
    setNewFood(prevFood => ({
      ...prevFood,
      notification: prevFood.notification === notificationDate ? null : notificationDate
    }));
  }
  return (
    <div className="addnewfood-container">
      <form action="" onSubmit={handleSubmit}>
        <h1>Add a Food and Seconds</h1>
        <label htmlFor="">
          Restaurant name:
          <br />
          <input
            type="text"
            id="food_name"
            placeholder="Food name"
            value={newFood.food_name}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <label htmlFor="">
          Food name:
          <br />
          <input
            type="text"
            id="restaurant_name"
            placeholder="Restaurant name"
            value={newFood.artist}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <div className="rating-container">
          <label>Rating:</label>
          <div className="plate-rating">
            {[1, 2, 3, 4, 5].map((rating) => (
              <img
                src={
                  rating <= (hoverRating || newFood.rating)
                    ? plateImages[1]
                    : plateImages[0]
                }
                alt={`Plate ${rating}`}
                onMouseEnter={() => setHoverRating(rating)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setNewFood({ ...newFood, rating: rating })}
              />
            ))}
          </div>
        </div>

        <br />
        <label htmlFor="">
          Seconds:
          <br />
          <input
            type="text"
            id="seconds"
            placeholder="seconds"
            value={newFood.seconds}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <label htmlFor="">
          Restaurant image url:
          <br />
          <input
            type="text"
            id="restaurant_img"
            placeholder="Restaurant_img"
            value={newFood.restaurant_img}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <label htmlFor="">
          Food image url:
          <br />
          <input
            type="text"
            id="food_img"
            placeholder="food_img"
            value={newFood.food_img}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <hr />
        
        <div className="notification-options">
  <label>Notification Reminders:</label>
  <div className="button-group">
  <button
  type="button"
  className={newFood.notification === new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime() ? 'active' : ''}
  onClick={() => handleNotificationToggle(1)}
>
  One Week
</button>
    <button
      type="button"
      className={newFood.notification === new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).getTime() ? 'active' : ''}
      onClick={() => handleNotificationToggle(2)}
    >
      Two Weeks
    </button>
    <button
      type="button"
      className={newFood.notification === new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).getTime() ? 'active' : ''}
      onClick={() => handleNotificationToggle(3)}
    >
      Three Weeks
    </button>
    <button
      type="button"
      className={newFood.notification === new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).getTime() ? 'active' : ''}
      onClick={() => handleNotificationToggle(4)}
    >
      Four Weeks
    </button>
  </div>
</div>




        <br />
        <button className="addNewForm_submit">Submit</button>
      </form>
    </div>
  );
}
