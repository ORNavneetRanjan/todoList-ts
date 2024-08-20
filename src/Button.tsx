import { Component, ButtonHTMLAttributes } from "react";

type Props = {
  className?: string;
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

class Button extends Component<Props> {
  render() {
    const { className, onClick, title, ...rest } = this.props;

    return (
      <button
        className={`w-40 font-sans text-2xl px-4 py-2 rounded-full ${className}`}
        onClick={onClick}
        {...rest}
      >
        <div className="flex items-center justify-center gap-1">{title}</div>
      </button>
    );
  }
}

export default Button;
