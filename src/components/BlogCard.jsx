import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';


const BlogCard = ({blog, deletable, handleDelete}) => {
    const {cover_image, title, description, published_at, id} = blog;
    return (
        <div className=" flex relative">
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-900 rounded">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && (
            <div onClick={() => handleDelete(id)} className=" absolute bg-primary p-3 rounded-full hover:scale-105 -top-5 -right-2">
                <MdDeleteForever
                size={20}
                className=" text-secondary group-hover:text-primary" />
            </div>)}
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.shape({
        cover_image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        published_at: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    deletable: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default BlogCard;