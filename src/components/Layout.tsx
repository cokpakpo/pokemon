
import { LayoutProps } from '../utils/types';

export const Layout = ({children}: LayoutProps) => {
    return (
        <>  
            <div className="main">
                { children }
            </div>
            <div className="footer">
                <p>made by <strong>Chrismantics</strong></p>
            </div>
        </>
    )
}