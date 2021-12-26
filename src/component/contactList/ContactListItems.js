import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <li key={id}>
        {name}:{number}
        <button onClick={() => deleteContact(id)}>Delete</button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
