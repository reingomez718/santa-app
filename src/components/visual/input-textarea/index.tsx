import * as React from 'react'; 

export class InputTextArea extends React.Component<Props> {
  public defaultProps: Partial<Props> = {
    maxLength: 100,
  };

  public render(): JSX.Element {
    const { name, maxLength, children, placeholder } = this.props;
    return (
      <textarea
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        value={children}
      />
    );
  }
}

export type Props = StateProps & DispatchProps;

export interface StateProps {
  name?: string;
  maxLength?: number;
  placeholder?: string;
  children?: string;
}

export interface DispatchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}