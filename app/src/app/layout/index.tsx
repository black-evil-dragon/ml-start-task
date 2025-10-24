import { Outlet } from "react-router-dom";

import Header from "@app/layout/Header";
import Footer from '@app/layout/Footer';

export default function Layout() {
    return (<>
        {/* App header component */}
        <Header />

        {/* App content */}
        <main>
            <Outlet />
        </main>

        {/* App footer component */}
        <Footer />
    </>);
}
