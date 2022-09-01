import { Route, Routes, HashRouter } from 'react-router-dom'

import ToDoPage from './ToDoPage/ToDoPage'
import ToDoPageRedux from './ToDoPageRedux/ToDoPageRedux'

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<ToDoPage />} />
                <Route path="/redux" element={<ToDoPageRedux />} />
            </Routes>
        </HashRouter>
    )
}