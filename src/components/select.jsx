export default function Select(props) {
    const { forName, label, options } = props;
   
    return (
        <div>
            <label for={forName}>{label}: </label>
            <select name={forName} id={forName}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

{/* <label for="cars">Choose a car:</label>

                    <select name="cars" id="cars">
                     <option value="volvo">Volvo</option>
                     <option value="saab">Saab</option>
                     <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select> */}
