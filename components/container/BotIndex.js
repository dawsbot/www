import React, { Component } from 'react';
import {style, merge} from 'next/css';

const gravatar = require('gravatar');

const styles = {
  sectionWrapper: {
    padding: '110px 26px 100px 26px'
  },
  section: {
    margin: '0 auto',
    maxWidth: '800px',
  },
  headshot: {
    width: '170px',
    borderRadius: '3px',
    padding: '4px',
    border: '1px solid black',
  },
  blackBackground: {
    backgroundColor: 'black',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)',
    color: 'white',
    width: '100vw',
    boxSizing: 'border-box',
    transform: 'skewY(8deg)',
    marginTop: '80px',
    paddingTop: '80px',
    paddingBottom: '180px',
    paddingLeft: '26px',
    paddingRight: '26px',
  },
  untilt: {
    transform: 'skewY(-8deg)',
  },
  liWorkedOn: {
    color: 'white',
    borderBottom: '1px solid white',
  },
  black: {
    color: 'black'
  },
  formContainer: {
    border: '2px solid white',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '4px',
    padding: '40px'
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid black',
    height: '42px',
    marginTop: '8px',
    marginBottom: '20px',
    borderRadius: '4px',
    paddingLeft: '20px',
    fontSize: '17px'
  },
  submitButton: {
    fontSize: '17px',
    height: '46px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white'
  },
  textArea: {
    height: '120px',
    paddingTop: '14px',
    paddingBottom: '14px',
  },
  vendorLink: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: '#E8B00C',
  }
};

class BotIndex extends Component {
  static displayName: 'BotIndex'

  state = {
    gravatarUrl: ''
  }
  handleInput = (e) => {
    this.setState({
      gravatarUrl: gravatar.url(e.target.value),
    });
  }

  render() {
    return (
      <div>
        <div className={style(styles.sectionWrapper)}>
          <section className={style(styles.section)}> <h2>Preview and copy your Gravatar image!</h2> <p>
              Every email address has a Gravatar image. But they are hard to figure out.

              <br/>
              <br/>

              Use this bot to help you discover yours!
            </p>
          </section>
        </div>

        <div className={
          merge(
            styles.sectionWrapper,
            styles.blackBackground)}>
          <div className={style(styles.untilt)}>
            <section className={style(styles.section)}>
              <form className={style(styles.formContainer)}>
                <label htmlFor="email">Email Address (never saved or sold)
                  <input className={style(styles.input)}  type="email" name="_replyto" onInput={this.handleInput}/>
                </label>

                <div>{`https${this.state.gravatarUrl}`}</div>
                <img src={this.state.gravatarUrl} role="presentation"/>

              </form>
            </section>
          </div>
        </div>

      </div>
    );
  }
}

export default BotIndex;
