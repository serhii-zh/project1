import styled from 'styled-components';
import active from '../../images/heart_active.png';
import inactive from '../../images/heart_inactive.png';
import hover from '../../images/heart_hover.png';

const StyledFavoritesButton = styled.a`
  background-color: #ffffff;
  background-image: url('${({ $favorite }) =>
    $favorite ? active : inactive}');
  background-size: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  padding: 3px;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 56%;
  left: 85%;
  cursor: pointer;

  &:hover {
    background-image: url('${hover}');
  }
`;

export default StyledFavoritesButton;
