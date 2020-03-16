import * as React from 'react'; 

export class Button extends React.Component<Props> {
  public render(): JSX.Element {
    const { label, onClick, id } = this.props;
    return (
      <button className='button' id={id} onClick={onClick}>
        {label}
      </button>
    )
  }
}

export type Props = StateProps & DispatchProps;

export interface StateProps {
  label: string;
  id?: string;
}

export interface DispatchProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}