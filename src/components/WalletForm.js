import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    const { getCurrenciesDispatch } = this.props;
    getCurrenciesDispatch();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="despesa">
          Valor:
          <input
            data-testid="value-input"
            placeholder="Valor"
            type="text"
            id="value"
            name="value"
          />
          <input
            data-testid="description-input"
            placeholder="descrição de despesa"
            type="text"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
          >
            {currencies.map((currencie) => (

              <option
                value={ currencie }
                key={ currencie }
              >
                {currencie}
              </option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          <select
            data-testid="method-input"
            name="method"
            id="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired),
  getCurrencies: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesDispatch: () => dispatch(getCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
