const App = () => (
  <div className="app">
    <h3>Happy hacking!</h3>

    <div>
            <form>
        	    <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    Price: 
                    <input type="number" />

                </label>
                <label>
                    Category:
                    <select id="foodCategory">
                        <option value="meat"> Meat </option>
                        <option value="greens"> Greens </option>
                        <option value="fish"> Fish </option>
                    </select>
                </label>
            </form>
        </div>
  </div>
);

export default App;
