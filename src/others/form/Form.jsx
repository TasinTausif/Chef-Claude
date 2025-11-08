// import './Form.css'
export default function () {

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const formElement = event.currentTarget;
    //     const formData = new FormData(formElement);
    //     const email = formData.get('email');
    //     const password = formData.get('password');
    //     formElement.reset()
    // }

    // Here, the above line of codes will be called automatically by react
    // function handleSubmit(formData) {
    //     const employmentStatus = formData.get('employmentStatus');
    //     // Checkbox and radio button are just same, just use getAll instead of get for checkbox to get all selected values
    //     const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    //     const favCol = formData.get("favColor");
    //     console.log({ favCol });
    // }

    // Grabbing all the obj from form
    function handleSubmit(formData) {
        // With the following format we'll get all form data in an object except checkboxes with multiple selections
        const data = Object.fromEntries(formData);
        // To get all selected checkboxes values, apply the method used earlier
        const dietaryData = formData.getAll('dietaryRestrictions');
        const allData = { ...data, dietaryRestrictions: dietaryData };
        console.log({ allData });
    }

    return (
        <section>
            <h1>Sign Up Form</h1>
            {/* <form onSubmit={handleSubmit} method='POST'> */}
            <form action={handleSubmit}>
                {/* Here htmlFor is same as for in regular html and associated with id */}
                <label htmlFor="email">Email:</label>
                {/* Here, defaultValue will pre-fill the input with the specified value and it is changeable */}
                <input type="email" id="email" name="email" placeholder="john@example.com" defaultValue={"hello@example.com"} />
                <br />
                {/* If wrapped label before and after input, it'll work same as above, but it'll appear in the same line */}
                {/* <label>
                Password:
                    <input type="password" name="password"/>
                </label> */}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <br />

                {/* Keeping same name property will allow to select only 1 item at a time. And by wrapping input with label and giving label at the end will keep button at left and text at right*/}
                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed" />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" />
                        Part-time
                    </label>
                    <label>
                        {/* By making defaultChecked true, this radio button will be selected by default */}
                        <input type="radio" name="employmentStatus" value="full-time" defaultChecked={true} />
                        Full-time
                    </label>
                </fieldset>
                <br />

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <select id="favColor" name="favColor" defaultValue="green" required>
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                {/* Button inside form will act as input type submit */}
                <button>Submit</button>
            </form>
        </section>
    )
}