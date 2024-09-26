import { Link } from "react-router-dom";
import nyanya from "../../assets/images/nyanya.jpg"

function Blog() {
    return (
        <>
            <div>
                <div className="blog-template">
                    <img src={nyanya} alt="kilimo cha nyanya" />
                    <h2>Kilimo Cha Nyanya Songea</h2>
                    <p><Link to="/blog/id">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis minima officia deleniti sit beatae iure nam temporibus quaerat! Obcaecati necessitatibus exercitationem dolorum dignissimos quasi laboriosam aperiam sapiente possimus, ad distinctio.</Link></p>
                    <div className="author-info">
                        <img src="author-photo" alt="author profile image" />
                        <h3>Author Name</h3>
                        <h4>Date</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;