import { classnames } from '../../lib';

const OptionList = ({ items, isOpen, downshiftProps }) => {
  const showItems = (item, index) => {
    const isHover = downshiftProps.highlightedIndex === index;

    return (
      <li
        className={classnames('py-1 px-3', isHover && 'bg-primary text-white')}
        {...downshiftProps.getItemProps({ item, index, key: `${item}${index}` })}
      >
        {item}
      </li>
    );
  };

  return (
    <ul
      className={classnames('outline-none my-0', isOpen && 'form-dropdown-list')}
      {...downshiftProps.getMenuProps()}
    >
      {isOpen && items.length > 0 && items.map(showItems)}
    </ul>
  );
};

export default OptionList;
