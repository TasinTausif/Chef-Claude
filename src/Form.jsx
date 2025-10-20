import '.Form.css'
export default function(){
    return (
        <section>
        <h1>Sign Up Form</h1>
        <form>
            {/* Here htmlFor is same as for in regular html and associated with id */}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" />
            <br />
            {/* If wrapped label before and after input, it'll work same as above */}
            <label>
                Password:
                <input type="password" name="password" placeholder="*********"/>
            </label>
            <br />
            {/* Button inside form will act as input type submit */}
            <button>Submit</button>
        </form>
    </section>
    )
}