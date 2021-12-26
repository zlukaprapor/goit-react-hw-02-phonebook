import PropTypes from "prop-types";

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={filter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  inputHandler: PropTypes.func,
};

export default Filter;
