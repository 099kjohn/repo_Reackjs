/** @jsx React.DOM */

var React = require('react')
var Modal = require('react-bootstrap').Modal
var pkg = require('../../package')

var AboutModal = React.createClass({
  getInitialState: function() {
    return {}
  },
  render: function() {
    return this.transferPropsTo(
      <Modal title={"About " + pkg.version} id="about">
        <div className="modal-body">
          <p>
            The <a href="https://www..com/Bikeshop"> Bike Shop</a> enables you to experience buying things online
            with bitcoin without actually having to own any real bitcoin by using the Bitcoin test network.
          </p>
          <ol>
            <li>
              You need to get a wallet that supports the <a href="https://en.bitcoin.it/wiki/Testnet">Bitcoin testnet</a>.
              <a href="https://play.google.com/store/apps/details?id=com..bitcoin"> </a> or any other testnet supported wallet would work.
            </li>
            <li>
              If not using , you need to acquire testnet coins from either <a href="http://tpfaucet.appspot.com/">TP Testnet Faucet</a> or
              <a href="http://faucet.xeno-genesis.com/"> Mojocoin Testnet Faucet</a>.
            </li>
            <li>
              Buy your fake Bikes on  Bikeshop!
            </li>
          </ol>
          <br/>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
            Close
          </button>
        </div>
      </Modal>
    )
  }
})

module.exports = AboutModal
