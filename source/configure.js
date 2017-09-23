import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import invariant from 'invariant';

export default function configure(
  apiSelector,
  {
    displayName = 'Format'
  } = {}
) {
  invariant(typeof apiSelector === 'function', 'Expected apiSelector to be a function but received \'%s\'.', JSON.stringify(apiSelector));

  function Format(props, context) {
    return props.children(apiSelector(context.intl, props));
  }

  Format.displayName = displayName;
  Format.contextTypes = { intl: intlShape.isRequired };
  Format.propTypes = { children: PropTypes.func.isRequired };

  return Format;
}
