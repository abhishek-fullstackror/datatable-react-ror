import * as React from 'react'
import { createRoot} from 'react-dom/client'
import Table from './Table'

export const Welcome = () => {
    return(
        <div>
        
        < Table />
        </div>
    )
}
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Welcome />);
