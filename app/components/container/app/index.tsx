import * as React from 'react'; 
import { InputText } from '../../visual/input-text';
import { Button } from '../../visual/button';
import { InputTextArea } from '../../visual/input-textarea';

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentName: this.props.currentName,
      currentWish: this.props.currentWish,
    };
  }

  public render(): JSX.Element {
    return (
      <html lang='en'>
        {this.renderHead()}
        {this.renderBody()}
      </html>
    )
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
        <script src="/client.js" defer />
      </head>
    );
  }

  private renderBody(): JSX.Element {
    return (
      <body>
        <header>
          <h1>
            A letter to Santa
          </h1>
          <br />
          <h4 id='display-status-message'/>
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
        <InputText placeholder='charlie.brown' name='userName' id='input-user-name'>
          {this.state.currentName}
        </InputText>
        What do you want for christmas?
        <br/>
        <InputTextArea placeholder='Gifts!' name='wish' id='input-wish'>
          {this.state.currentWish}
        </InputTextArea>
        <Button label='Send' id='button-send' onClick={this.props.onSendClick}/>
      </main>
    );
  }

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
}

export interface DispatchProps {
  onChangeName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface State {
  currentName?: string;
  currentWish?: string;
}