import Footer from "../../components/Footer";

const AddExpertAdvice = () => {
    return (
        <>
            <div>
                <form action="/add-expert-advice" className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="post-title">Post Title</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" id="post-title" placeholder="Enter Post Title" />

                    <label className="block text-gray-700 text-sm mb-2" htmlFor="description">Description / Body</label>
                    <input type="text" name="" id="" className="w-full p-2 mb-4 border border-gray-300 rounded" placeholder="Enter Post Description" />

                    <label className="block text-gray-700 text-sm mb-2" htmlFor="thumbanail">Thumbanail IMage</label>
                    <input type="file" name="" id="" accept="image/*" className="w-full p-2 mb-4 border border-gray-300 rounded" />

                    <select name="author" id="" className="w-full p-2 mb-4 border border-gray-300 rounded">
                        <option value="njox">Njox</option>
                        <option value="liam">Duran</option>
                    </select>

                    <button className="w-full p-2 bg-green-600 text-white rounded">add advice</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default AddExpertAdvice;