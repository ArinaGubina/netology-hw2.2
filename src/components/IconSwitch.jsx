import PropTypes from 'prop-types'
import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

export const IconSwitch = (props) => {
  const icon = (props.icon == "view_list") ? <ListIcon></ListIcon> : <ViewModuleIcon></ViewModuleIcon>
  return (
    <div className="icon_container" onClick={props.onSwitch}>{icon}</div>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
}