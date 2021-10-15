import { useSelect } from 'downshift';
import { OptionList } from '.';
import { classnames, downshift } from '../../lib';

// FIXME: handle onChange, onBlur
const Dropdown = ({ children, placeholder }) => {
  const { labels } = downshift.normalize(children);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    ...downshiftProps
  } = useSelect({ items: labels });

  return (
    <div className={classnames('relative', isOpen && 'is-open')}>
      <div className="form-input form-dropdown" {...getToggleButtonProps()}>
        <span className="flex-grow">{selectedItem || placeholder}</span>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <OptionList items={labels} isOpen={isOpen} downshiftProps={downshiftProps} />
    </div>
  );
};

export default Dropdown;
