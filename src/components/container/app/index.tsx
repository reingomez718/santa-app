import * as React from 'react'; 
import { InputText } from '../../visual/input-text';
import { Button } from '../../visual/button';
import { InputTextArea } from '../../visual/input-textarea';
import { SendGiftResult, UserProfile } from '../../../common/interface';
import { getMessage } from './helpers/get-message';

export class App extends React.Component<Props, State> {
  public static defaultProps: Partial<Props>  = {
    pageType: 'form', 
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      currentName: this.props.currentName,
      currentWish: this.props.currentWish,
      infoMessage: 'test',
    };
  }

  public render(): JSX.Element {
    const { pageType } = this.props;
    return (
      <html lang='en'>
        {this.renderHead()}
        {pageType === 'form' ? this.renderInputFormBody() : this.renderResultBody()}
      </html>
    )
  }

  private renderResultBody(): JSX.Element {
    if (!this.props.execResult) return;
    const { execResult: { result, userProfile }, currentName } = this.props;
    return (
      <body>
        <h3>{getMessage(result, currentName, userProfile && userProfile.address)}</h3>
      </body>
    );
  }

  private renderHead(): JSX.Element {
    return (
      <head>
        <title>Welcome to Glitch!</title>
        <meta name='description' content='A cool thing made with Glitch' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link id='favicon' rel='icon' href='https://glitch.com/edit/favicon-app.ico' type='image/x-icon' />
        <link rel='stylesheet' href='/style.css' />
      </head>
    );
  }

  private renderInputFormBody(): JSX.Element {
    return (
      <body>
        <h4>{this.state.infoMessage}</h4>
        <header>
          <h1>
            A letter to Santa
          </h1>
        </header>
        {this.renderMain()}
        {this.renderFooter()}
      </body>
    );
  }

  private renderMain(): JSX.Element {
    return (
      <main>
        <p className='bold'>Ho ho ho, what you want for christmas?</p>
        Who are you?
        <InputText
          placeholder='charlie.brown'
          name='userid'
          onChange={this.handleUserIdOnChange}
        >
          {this.state.currentName}
        </InputText>
        What do you want for christmas?
        <br/>
        <InputTextArea
          placeholder='Gifts!'
          name='wish'
          onChange={this.handleWishOnChange}
        >
          {this.state.currentWish}
        </InputTextArea>
        <Button
          label='Send!'
          id='submitletter'
          onClick={this.handleSendClick}
        />
      </main>
    );
  }

  protected handleUserIdOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      currentName: e.target.value,
    });
    console.log('AAASA' + e.target.value);
  };

  protected handleWishOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      currentWish: e.target.value,
    });
  };

  protected handleSendClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onSendClick } = this.props;

    this.setState({
      infoMessage: null,
    });

    console.log(this.state.currentName);
    if (!this.state.currentName) {
      this.setState({
        infoMessage: getMessage('USER_EMPTY'),
      });
    } else if (!this.state.currentWish) {
      this.setState({
        infoMessage: getMessage('WISH_EMPTY'),
      });
    }

    if (onSendClick) onSendClick(e);
  };

  private renderFooter(): JSX.Element {
    return (
      <>
        <footer>
          Made with
          <a href='https://glitch.com'>Glitch</a>!
        </footer>
        <div className='glitchButton' style={{ position: 'fixed', top: '20px', right: '20px' }} />
        <script src='https://button.glitch.me/button.js'></script>
      </>
    );
  }
}

export type Props = StateProps & DispatchProps;

export interface StateProps {
  currentName?: string;
  currentWish?: string;
  pageType?: 'form' | 'result';
  execResult?: { result: SendGiftResult, userProfile?: UserProfile };
  infoMessage?: string;
}

export interface DispatchProps {
  onSendClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface State {
  currentName?: string;
  currentWish?: string;
  infoMessage?: string;
}