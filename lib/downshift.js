const reactProps = ({ props: { value, children } }) => {
  return { value, label: children };
};

export const downshiftItems = (children) => {
  const props = children.map(reactProps);

  return {
    props,
    labels: props.map(({ label }) => label),
    values: props.map(({ value }) => value),
  };
};

const downshift = {
  normalize: downshiftItems,
};

export default downshift;
