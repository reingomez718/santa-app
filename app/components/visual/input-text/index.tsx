import React from 'react'; 

export class InputText extends React.Component<Props> {
  public render(): JSX.Element {
    const { onChange, placeholder, children, name, id } = this.props;
    return <input type='text' onChange={onChange} className='input-text' placeholder={placeholder} value={children} name={name} id={id} />;
  }
}

export type Props = StateProps & DispatchProps;

export interface StateProps {
  children?: string;
  placeholder?: string;
  name?: string;
  id?: string;
}

export interface DispatchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}