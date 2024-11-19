import './styles.css';

interface ButtonProps {
	text: string;
	onClick: () => void;
}

const CustomButton = ({ onClick, text } : ButtonProps) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
