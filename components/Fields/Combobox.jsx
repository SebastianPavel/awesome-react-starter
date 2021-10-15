import { useState } from 'react';
import { useCombobox } from 'downshift';
import { OptionList } from '.';
import { classnames, downshift } from '../../lib';

// FIXME: handle onChange, onBlur
const Combobox = ({ children, placeholder }) => {
  const { labels } = downshift.normalize(children);
  const [inputItems, setInputItems] = useState(labels);

  const {
    isOpen,
    getToggleButtonProps,
    getInputProps,
    getComboboxProps,
    ...downshiftProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        labels.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()))
      );
    },
  });

  return (
    <div className={classnames('relative', isOpen && 'is-open')}>
      <div className="form-input form-combobox" {...getComboboxProps()}>
        <input
          className="-my-2 outline-none w-full bg-transparent"
          placeholder={placeholder}
          {...getInputProps()}
        />
        <span role="button" {...getToggleButtonProps()}>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <OptionList items={inputItems} isOpen={isOpen} downshiftProps={downshiftProps} />
    </div>
  );
};

export default Combobox;
