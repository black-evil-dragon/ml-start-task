import { Outlet } from "react-router-dom";

import { Header } from "@app/layout/Header";
import { Footer } from '@app/layout/Footer';


export function Layout() {
    return (<>
        {/* App header component */}
        <Header />

        {/* App content */}
        <div className="app-content">
            <Outlet />
        </div>

        {/* App footer component */}
        <Footer />
    </>);
}
