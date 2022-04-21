import ReactDOM from "react-dom"; //parte do react que conversa com a pagina

import { BomDia } from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
<div>
  < BomDia nome="Guile" />
  < BoaTarde nome="Ana" />
  < BoaNoite nome="Guile" />
</div>
, document.getElementById('root'))
