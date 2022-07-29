import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { loginInput } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: true,
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, this.enableDisableButton);
  }

  // achei a solução aqui: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  enableDisableButton = () => {
    const { email, password } = this.state;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const min = 6;
    this.setState({
      disableButton: !email.match(valid) || (password.length < min),
    });
  }

  onClickButton = () => {
    const { history, login } = this.props;
    const { email } = this.state;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disableButton } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              placeholder="trybe@trybe.com"
              type="email"
              id="email"
              name="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              placeholder="password"
              type="password"
              id="password"
              name="password"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          <button
            type="button"
            disabled={ disableButton }
            onClick={ this.onClickButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginInput(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
