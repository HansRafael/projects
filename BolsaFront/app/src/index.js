import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "./Button"

const myelement = (
    <body>
    <h1>Questão 3 - botões</h1>
    <h2>Like / Dislike</h2>

    <div id="button"></div>
    <i class="fas fa-thumbs-up"></i>
  </body>
  );

ReactDOM.render(myelement, document.getElementById('root'));
ReactDOM.render(<Button />, document.getElementById("button"))