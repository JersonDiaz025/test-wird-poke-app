import "./index.css";

interface SearchProps {
  value: string;
  type?: string;
  placeholder: string;
  dispatch: (action: { type: string; payload: string }) => void;
  setValue: (value: string) => { type: string; payload: string };
}

const SearchBar = (props: SearchProps) => {
  const { placeholder, value, dispatch, setValue, type = "text" } = props;

  // Update value in redux
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.target.value;
    dispatch(setValue(eventValue));
  };
  return (
    <div className="container-search">
      <form className="form">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
