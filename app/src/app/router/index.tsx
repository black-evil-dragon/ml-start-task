//* React
import { Routes, Route, BrowserRouter } from "react-router-dom";


//* App layout
import { Layout } from '@app/layout';


//* Pages
import { HomePage } from "@pages/home";
import { NoPage } from "@pages/404";


export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Home page */}
                    <Route index element={<HomePage />} />

                    {/*     ... */}

                    {/* System pages */}
                    <Route path="*" element={<NoPage />} />
                    <Route path="/404" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
