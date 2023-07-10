import LinkLayouts from "./layouts/LinkLayouts";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import FactsPage from "./pages/FactsPage";

const router = [  
  {
    element: <LinkLayouts/>,
    path: '/',
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        element: <AboutPage />,
        path: 'about'
      },
      {
        element: <FactsPage />,
        path: 'about/:factId'
      }      
    ]
  },
  
]

export default router