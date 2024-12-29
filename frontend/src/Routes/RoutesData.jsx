import AddContact from "../pages/AddContact/AddContact.jsx";
import ContactList from "../pages/ContactList/ContactList.jsx";
import Error from "../pages/Error/Error.jsx";

export const RoutesData = [
    {
        path: '/',
        element: <ContactList />,
    },
    {
        path: '/adduser',
        element: <AddContact />,
    },
    {
        path: '/updateuser',
        element: <AddContact isUpdate />,
    },
    {
        path: '*',
        element: <Error />
    }
]