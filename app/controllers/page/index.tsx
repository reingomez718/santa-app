import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import * as React from 'react'; 
import { App } from '../../components/container/app';

export const pageController = (req: Request, res: Response) => { 
  res.send(renderToString(React.createElement(App)));
}