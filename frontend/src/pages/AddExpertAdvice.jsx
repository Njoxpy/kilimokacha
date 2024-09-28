import Footer from "../components/Footer";

const AddExpertAdvice = () => {
    return (
        <>
            <div>
                <form action="/add-expert-advice">
                    <label htmlFor="title">title</label>
                    <input type="text" name="" id="" placeholder="Enter Post Title" />

                    <label htmlFor="description">Description / Body</label>
                    <input type="text" name="" id="" placeholder="Enter Post Description" />

                    <label htmlFor="thumbanail">Thumbanail IMage</label>
                    <input type="file" name="" id="" accept="image/*" />

                    <select name="author" id="">
                        <option value="njox">Njox</option>
                        <option value="liam">Liam</option>
                    </select>

                    <button>add advice</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default AddExpertAdvice;