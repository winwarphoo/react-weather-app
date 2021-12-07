const Form = ({ city, setCity, getWeather }) => { 
  return (
    <form　onSubmit={getWeather}>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city}></input>
      <button type="submit">Get Weather</button>      
    </form>
  );
};

export default Form;

//b07e0c4d8127423fbd474916210112
//https://api.weatherapi.com/v1/current.json?key=b07e0c4d8127423fbd474916210112&q=London&aqi=no